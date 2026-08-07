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
