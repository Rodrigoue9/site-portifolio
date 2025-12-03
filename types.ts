export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: React.ReactNode;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Languages';
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}
