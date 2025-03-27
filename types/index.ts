export interface Contributor {
  name: string;
  contributions: string;
}

export interface Recruiter {
  company: string;
  openings: string;
}

export interface ProfileCardProps {
  image?: string;
  title: string;
  subtitle: string;
} 