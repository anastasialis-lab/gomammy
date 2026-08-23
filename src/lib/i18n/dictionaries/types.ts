/** Shape of every UI dictionary. Adding a key here forces all 6 locales to define it. */
export type Dictionary = {
  nav: {
    home: string;
    pregnancy: string;
    byWeek: string;
    symptoms: string;
    health: string;
    birth: string;
    baby: string;
    apps: string;
    menu: string;
    closeMenu: string;
    language: string;
    languageSwitchHint: string;
  };
  actions: {
    search: string;
    searchPlaceholder: string;
    close: string;
    readMore: string;
    viewAll: string;
    explore: string;
    share: string;
    copyLink: string;
    linkCopied: string;
    appStore: string;
    googlePlay: string;
    skipToContent: string;
  };
  article: {
    tableOfContents: string;
    minRead: string;
    updatedOn: string;
    publishedOn: string;
    writtenBy: string;
    reviewedBy: string;
    faqTitle: string;
    relatedArticles: string;
    sources: string;
    disclaimer: string;
    breadcrumbHome: string;
    shareThis: string;
  };
  week: {
    /** `{n} weeks pregnant` — `{n}` is replaced with the week number. */
    pageTitle: string;
    shortLabel: string;
    babyDevelopment: string;
    yourBody: string;
    commonSymptoms: string;
    whatToExpect: string;
    tips: string;
    sizeOf: string;
    length: string;
    weight: string;
    trimester: string;
    trimesterNames: [string, string, string];
    previousWeek: string;
    nextWeek: string;
    relatedWeeks: string;
    indexTitle: string;
    indexIntro: string;
    jumpToWeek: string;
    dueDateNote: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    featured: string;
    latest: string;
    popularWeeks: string;
    exploreTopics: string;
    trustTitle: string;
    trustBody: string;
  };
  search: {
    title: string;
    intro: string;
    placeholder: string;
    noResults: string;
    /** `{n} results` */
    resultsCount: string;
    typeToSearch: string;
    inCategory: string;
  };
  apps: {
    title: string;
    intro: string;
    keyFeatures: string;
    screenshots: string;
    relatedArticles: string;
    getTheApp: string;
    availableOn: string;
  };
  cookies: {
    title: string;
    body: string;
    acceptAll: string;
    rejectAll: string;
    customize: string;
    savePreferences: string;
    necessary: string;
    necessaryDesc: string;
    analytics: string;
    analyticsDesc: string;
    marketing: string;
    marketingDesc: string;
    preferences: string;
    preferencesDesc: string;
    alwaysOn: string;
    manageLink: string;
    privacyLink: string;
  };
  footer: {
    tagline: string;
    explore: string;
    company: string;
    legal: string;
    about: string;
    editorialPolicy: string;
    contact: string;
    privacy: string;
    terms: string;
    cookiePolicy: string;
    disclaimer: string;
    rights: string;
  };
  common: {
    notFoundTitle: string;
    notFoundBody: string;
    backHome: string;
    loading: string;
  };
};
