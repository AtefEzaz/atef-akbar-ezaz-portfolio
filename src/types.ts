export interface SkillGroup {
  label: string
  items: string[]
}

export interface Project {
  slug: string
  name: string
  summary: string
  description: string
  tech: string[]
  repoUrl?: string
  liveUrl?: string
  featured?: boolean
  status: 'shipped' | 'research' | 'archived'
}

export interface EducationItem {
  school: string
  credential: string
  period: string
}

export interface ExperienceItem {
  role: string
  org: string
  period: string
  points: string[]
}
