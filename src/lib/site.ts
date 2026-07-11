export const SITE = {
  name: "LayChess",
  tagline: "Advanced Browser-Based Chess Engine Built for Speed, Strategy, and Sharp Play.",
  github: import.meta.env.VITE_GITHUB_URL as string | undefined,
  portfolio: import.meta.env.VITE_PORTFOLIO_URL as string | undefined,
} as const;

export const DEVELOPER = {
  name: "Prakhar Kumar",
  role: "Full Stack Developer & Chess Engine Developer",
  responsibilities: [
    "Architecture Design",
    "Frontend Development",
    "Chess Engine Development",
    "Optimization",
    "Testing",
    "Deployment",
  ],
} as const;
