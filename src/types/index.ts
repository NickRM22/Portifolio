export type Theme = 'dark' | 'light'

export type IconName =
  | 'code'
  | 'database'
  | 'globe'
  | 'workflow'
  | 'flame'
  | 'list'
  | 'cpu'
  | 'terminal'
  | 'briefcase'
  | 'book'
  | 'mail'
  | 'github'
  | 'linkedin'

export interface LinkData {
  label: string
  url: string
  ariaLabel: string
}

export interface NavigationItem {
  label: string
  href: string
}

export interface SectionHeadingData {
  eyebrow: string
  title: string
  description?: string
}

export interface QuickFact {
  label: string
  value: string
}

export interface SkillCategory {
  title: string
  description: string
  icon: IconName
  items: readonly string[]
}

export interface Project {
  number: string
  name: string
  description: string
  technologies: readonly string[]
  icon: IconName
  repoUrl?: string
  repoLabel?: string
  repoAriaLabel?: string
  demoUrl?: string
  demoLabel?: string
  demoAriaLabel?: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  startDate: string
  endDate?: string
  activities: readonly string[]
  transferableSkills: readonly string[]
}

export interface Certification {
  name: string
  issuer: string
}

export interface ContactMethod extends LinkData {
  icon: IconName
  value: string
  external: boolean
}

export interface PortfolioData {
  seo: {
    title: string
    description: string
    themeColorDark: string
    themeColorLight: string
    openGraph: {
      type: string
      title: string
      description: string
    }
  }
  personal: {
    name: string
    initials: string
    age: number
    birthYear: number
    location: string
    email: string
    githubUrl: string
    linkedinUrl: string
    resumeUrl?: string
  }
  navigation: {
    ariaLabel: string
    items: readonly NavigationItem[]
    contactCta: NavigationItem
  }
  hero: {
    eyebrow: string
    titleLines: readonly string[]
    titleAriaLabel: string
    subtitle: string
    highlight: string
    primaryCta: NavigationItem
    secondaryCta: NavigationItem
    resumeCta: string
    resumeAriaLabel: string
    codeLabel: string
    codeValue: string
    visualAriaLabel: string
  }
  about: SectionHeadingData & {
    paragraphs: readonly string[]
    facts: readonly QuickFact[]
  }
  careerGoal: SectionHeadingData & {
    quote: string
    supportLabel: string
    supportItems: readonly string[]
  }
  skills: SectionHeadingData & {
    categories: readonly SkillCategory[]
  }
  projects: SectionHeadingData & {
    items: readonly Project[]
  }
  experience: SectionHeadingData & {
    items: readonly ExperienceItem[]
  }
  education: SectionHeadingData & {
    degreeLabel: string
    degree: string
    institutionLabel: string
    institution: string
    statusLabel: string
    status: string
    completionLabel: string
    completion: string
    certificationsTitle: string
  }
  certifications: readonly Certification[]
  contact: SectionHeadingData & {
    methods: readonly ContactMethod[]
    emailCta: string
    emailAriaLabel: string
    copyButton: string
    copyAriaLabel: string
    copySuccess: string
    copyError: string
  }
  footer: {
    note: string
    copyrightSymbol: string
    year: number
    owner: string
    rights: string
    backToTop: string
    backToTopAriaLabel: string
  }
  ui: {
    skipToContent: string
    brandAriaLabel: string
    openMenu: string
    closeMenu: string
    mobileNavigationId: string
    activateLightTheme: string
    activateDarkTheme: string
    externalLinkHint: string
    currentPageLabel: string
  }
}
