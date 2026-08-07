export type HeroContent = {
  eyebrow: string
  title: string
  description: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  footerText: string
}

export type TrustIndicator = {
  title: string
  description: string
}

export type ExpertiseItem = {
  title: string
  description: string
}

export const trustIndicators: TrustIndicator[] = [
  {
    title: "Automation strategy aligned with product goals",
    description:
      "Designing test platforms that fit the business, not just the codebase.",
  },
  {
    title: "Quality systems at scale",
    description:
      "Helping teams reduce risk while increasing release velocity through reliable infrastructure.",
  },
  {
    title: "Engineering leadership with clarity",
    description:
      "Communicating complex quality initiatives in a way that stakeholders trust and adopt.",
  },
]

export type PhilosophyItem = {
  title: string
  description: string
}

export type SectionLink = {
  href: string
  title: string
  description: string
}

export const sectionLinks: SectionLink[] = [
  {
    href: "#trust-indicators",
    title: "Trust indicators",
    description: "How I help teams deliver stable, observable quality systems.",
  },
  {
    href: "#engineering-philosophy",
    title: "Engineering philosophy",
    description: "The principles used to build sustainable quality practices.",
  },
  {
    href: "#core-expertise",
    title: "Core expertise",
    description: "The skills and systems I bring to execution and strategy.",
  },
]

export const philosophyItems: PhilosophyItem[] = [
  {
    title: "Quality as an investment",
    description:
      "Build testing and automation that becomes a long-term asset, not a short-term cost.",
  },
  {
    title: "Systems over scripts",
    description:
      "Focus on architecture, observability, and feedback loops before writing the first test case.",
  },
  {
    title: "Collaboration first",
    description:
      "Embed quality practices into cross-functional workflows so engineering work is owned together.",
  },
]

export const expertiseItems: ExpertiseItem[] = [
  {
    title: "Automation architecture",
    description:
      "Building reusable platforms and frameworks that reduce maintenance and increase developer productivity.",
  },
  {
    title: "Release confidence",
    description:
      "Designing observability, validation, and flow so teams ship more often without compromising quality.",
  },
  {
    title: "Cross-team collaboration",
    description:
      "Aligning product, engineering, and QA to drive clear expectations and measurable outcomes.",
  },
]

export const heroContent: HeroContent = {
  eyebrow: "Quality engineering leadership",
  title:
    "Goldi Saini helps teams scale quality engineering with modern automation.",
  description:
    "Build reliable platforms, improve release confidence, and communicate engineering strategy clearly.",
  primaryCtaLabel: "View case studies",
  secondaryCtaLabel: "Read my approach",
  footerText:
    "Available for leadership, consulting, and strategic quality engineering roles.",
}
