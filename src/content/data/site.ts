import type { Locale } from '@/lib/i18n/config';
import type { Author, SiteSettings } from '@/lib/content/types';

export const BRAND = {
  name: 'GoMammy',
  legalName: 'GoMammy',
  /** Overridden by NEXT_PUBLIC_SITE_URL in every environment. */
  fallbackUrl: 'https://hellomommy.co',
  social: [
    'https://www.instagram.com/gomammy',
    'https://www.pinterest.com/gomammy',
  ],
  contactEmail: 'hello@hellomommy.co',
} as const;

const siteDescriptions: Record<Locale, string> = {
  en: 'Calm, clear pregnancy guidance week by week — plus apps that keep it all in one place.',
  de: 'Ruhige, klare Begleitung durch die Schwangerschaft — Woche für Woche, plus Apps für alles an einem Ort.',
  it: 'Informazioni chiare e serene sulla gravidanza, settimana per settimana — e app per tenere tutto insieme.',
  es: 'Información clara y tranquila sobre el embarazo, semana a semana — y apps para tenerlo todo en un sitio.',
  pt: 'Informação calma e clara sobre a gravidez, semana a semana — e apps para ter tudo num só lugar.',
  fr: 'Des repères clairs et apaisants pour la grossesse, semaine après semaine — et des applis pour tout réunir.',
  uk: 'Спокійна та зрозуміла інформація про вагітність — тиждень за тижнем, плюс застосунки, де все зібрано разом.',
};

export function getSiteSettings(locale: Locale): SiteSettings {
  return {
    locale,
    siteName: BRAND.name,
    siteDescription: siteDescriptions[locale],
    organizationName: BRAND.legalName,
    logo: {
      src: '/brand/logo.svg',
      alt: 'GoMammy',
      width: 160,
      height: 40,
    },
    social: [...BRAND.social],
  };
}

/**
 * Seed authors.
 *
 * These are editorial placeholders, deliberately institutional rather than
 * invented individuals: a fabricated named doctor with invented credentials
 * would be misleading on health content. Replace them in the CMS with the
 * real people who write and review each article before launch.
 */
const authorCopy: Record<Locale, Record<string, { role: string; bio: string }>> = {
  en: {
    editorial: {
      role: 'GoMammy editorial team',
      bio: 'Writers and editors who turn antenatal guidance into plain, calm language.',
    },
    reviewer: {
      role: 'Medical review board',
      bio: 'Clinicians who check every health article against current antenatal guidance.',
    },
  },
  de: {
    editorial: {
      role: 'GoMammy Redaktion',
      bio: 'Autorinnen und Redakteurinnen, die Vorsorgewissen in klare, ruhige Sprache übersetzen.',
    },
    reviewer: {
      role: 'Medizinischer Beirat',
      bio: 'Fachleute, die jeden Gesundheitsartikel mit aktuellen Leitlinien abgleichen.',
    },
  },
  it: {
    editorial: {
      role: 'Redazione GoMammy',
      bio: 'Autrici e redattori che traducono le linee guida in un linguaggio semplice e sereno.',
    },
    reviewer: {
      role: 'Comitato di revisione medica',
      bio: 'Professionisti che verificano ogni articolo sulla salute rispetto alle linee guida attuali.',
    },
  },
  es: {
    editorial: {
      role: 'Redacción de GoMammy',
      bio: 'Autoras y editoras que traducen las guías clínicas a un lenguaje claro y sereno.',
    },
    reviewer: {
      role: 'Comité de revisión médica',
      bio: 'Profesionales que contrastan cada artículo de salud con las guías vigentes.',
    },
  },
  pt: {
    editorial: {
      role: 'Redação GoMammy',
      bio: 'Autoras e editoras que traduzem as orientações clínicas para uma linguagem simples e calma.',
    },
    reviewer: {
      role: 'Comissão de revisão médica',
      bio: 'Profissionais que confrontam cada artigo de saúde com as orientações atuais.',
    },
  },
  fr: {
    editorial: {
      role: 'Rédaction GoMammy',
      bio: 'Des autrices et éditrices qui traduisent les recommandations en un langage clair et apaisant.',
    },
    reviewer: {
      role: 'Comité de relecture médicale',
      bio: 'Des professionnels qui confrontent chaque article santé aux recommandations en vigueur.',
    },
  },
  uk: {
    editorial: {
      role: 'Редакція GoMammy',
      bio: 'Авторки й редакторки, які перекладають медичні рекомендації спокійною зрозумілою мовою.',
    },
    reviewer: {
      role: 'Медична редакційна рада',
      bio: 'Фахівці, які звіряють кожну статтю про здоров’я з чинними рекомендаціями.',
    },
  },
};

export function getAuthors(locale: Locale): Author[] {
  const copy = authorCopy[locale];
  return [
    {
      id: 'editorial',
      name: 'GoMammy',
      role: copy.editorial.role,
      bio: copy.editorial.bio,
      avatar: { src: '/brand/avatar-editorial.svg', alt: 'GoMammy', width: 96, height: 96 },
    },
    {
      id: 'reviewer',
      name: 'GoMammy',
      role: copy.reviewer.role,
      bio: copy.reviewer.bio,
      avatar: { src: '/brand/avatar-reviewer.svg', alt: 'GoMammy', width: 96, height: 96 },
    },
  ];
}

export function getAuthor(locale: Locale, id: string): Author | undefined {
  return getAuthors(locale).find((author) => author.id === id);
}
