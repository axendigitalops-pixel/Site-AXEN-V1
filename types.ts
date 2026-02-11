import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  sector: string;
  description: string;
  image: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}