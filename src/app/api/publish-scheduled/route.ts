import type { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

import { LOCALES } from "@/lib/i18n/config";
import { getArticleByKey, listCategories } from "@/lib/content/source";
import { routes } from "@/lib/routes";

const SCHEDULE: Record<string, string> = {
  "2026-08-31": "how-to-use-bubbi",
  "2026-09-03": "best-week-listen-heartbeat-phone",
  "2026-09-06": "baby-heartbeat-vs-maternal-pulse",
  "2026-09-09": "is-listening-heartbeat-phone-safe",
  "2026-09-12": "app-vs-home-doppler-vs-ultrasound",
  "2026-09-15": "prepare-phone-heartbeat-recording",
  "2026-09-18": "why-heartbeat-recording-unclear",
  "2026-09-21": "anterior-placenta-heartbeat-audio",
  "2026-09-24": "save-share-heartbeat-recording",
  "2026-09-27": "pregnancy-app-privacy",
};

function dateInKyiv(date: Date): string {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Europe/Kyiv",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((entry) => entry.type === type)?.value ?? "";
  return `${part("year")}-${part("month")}-${part("day")}`;
}

function authorized(request: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (secret) {
    return request.headers.get("authorization") === `Bearer ${secret}`;
  }
  return (
    process.env.NODE_ENV !== "production" ||
    request.headers.get("user-agent") === "vercel-cron/1.0"
  );
}

export async function GET(request: NextRequest) {
  if (!authorized(request)) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const date = dateInKyiv(new Date());
  const translationKey = SCHEDULE[date];
  if (!translationKey) {
    return Response.json({ ok: true, date, published: false, revalidated: [] });
  }

  const paths = new Set<string>(["/sitemap.xml"]);
  for (const locale of LOCALES) {
    const article = getArticleByKey(locale, translationKey);
    if (!article) {
      return Response.json(
        {
          ok: false,
          error: `Scheduled article is unavailable: ${locale}/${translationKey}`,
        },
        { status: 503 },
      );
    }
    const category = listCategories(locale).find(
      (entry) => entry.translationKey === article.categoryKey,
    );
    if (!category) {
      return Response.json(
        {
          ok: false,
          error: `Article category is unavailable: ${locale}/${translationKey}`,
        },
        { status: 503 },
      );
    }

    paths.add(`/${locale}`);
    paths.add(routes.blog(locale));
    paths.add(routes.category(locale, category));
    paths.add(routes.article(locale, article));
  }

  for (const path of paths) revalidatePath(path);

  return Response.json({
    ok: true,
    date,
    published: true,
    translationKey,
    revalidated: [...paths],
  });
}
