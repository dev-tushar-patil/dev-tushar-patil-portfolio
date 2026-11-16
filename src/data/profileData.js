import { CodeXml, Layers, CircleCheck, Rocket } from 'lucide-react';
import { GitHubIcon, LeetCodeIcon, GfgIcon, LinkedInIcon, MediumIcon } from '../components/BrandIcons';

export const profile = {
  name: 'Tushar Patil',
  brand: 'dev-tushar-patil',
  designation: 'Java Full Stack Developer',
  tagline:
    'Building scalable and reliable applications with Java, Spring Boot, Microservices and React JS.',
  email: 'devtusharpatil.tech@gmail.com',
  phone: '+91 9011059088',
  phoneHref: 'tel:+919011059088',
  // Drop the PDF into public/resume/ with this exact name and the button starts downloading it.
  resume: {
    url: `${import.meta.env.BASE_URL}resume/Tushar-Patil-Resume.pdf`,
    fileName: 'Tushar-Patil-Resume.pdf',
  },
  about: [
    "I'm a Java Full Stack Developer with 3+ years of experience in designing, developing and delivering scalable web and mobile applications using Java, Spring Boot, Microservices, MySQL and React JS.",
    'I enjoy solving complex problems, developing practical software solutions and exploring modern technologies, including Cloud AI and AI-powered development tools.',
  ],
};

export const navLinks = [
  { id: 'overview', label: 'Overview' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experiences' },
  { id: 'skills', label: 'Skills' },
  { id: 'profiles', label: 'Profiles' },
  { id: 'contact', label: 'Contact' },
];

export const achievements = [
  { value: '3+ Years', label: 'Experience', icon: CodeXml, tone: 'bg-sky border-[#dcebfb]' },
  { value: '10+', label: 'Projects', icon: Layers, tone: 'bg-peach border-[#fbe7cf]' },
  { value: '200+', label: 'Problems Solved', icon: CircleCheck, tone: 'bg-mint border-[#d3f3df]' },
  { value: 'Full Stack', label: 'Development', icon: Rocket, tone: 'bg-lavender border-[#e6e1fb]' },
];

export const developerProfiles = [
  { platform: 'GitHub', username: '@dev-tushar-patil', url: 'https://github.com/dev-tushar-patil', icon: GitHubIcon, iconClass: 'text-[#111111]' },
  { platform: 'LeetCode', username: '@tusharispatil27', metric: '200+ Problems Solved', url: 'https://leetcode.com/u/tusharispatil27/', icon: LeetCodeIcon, iconClass: 'text-[#FFA116]' },
  { platform: 'GeeksforGeeks', username: '@devtusharpatil', url: 'https://www.geeksforgeeks.org/profile/devtusharpatil', icon: GfgIcon, iconClass: 'text-[#2F8D46]' },
  { platform: 'LinkedIn', username: '/dev-tushar-patil', metric: '8,600+ Followers', url: 'https://www.linkedin.com/in/dev-tushar-patil', icon: LinkedInIcon, iconClass: 'text-[#0A66C2]' },
  { platform: 'Medium', username: '@tusharispatil27', url: 'https://medium.com/@tusharispatil27', icon: MediumIcon, iconClass: 'text-[#111111]' },
];

export const socialLinks = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/dev-tushar-patil', icon: LinkedInIcon },
  { label: 'GitHub', url: 'https://github.com/dev-tushar-patil', icon: GitHubIcon },
  { label: 'LeetCode', url: 'https://leetcode.com/u/tusharispatil27/', icon: LeetCodeIcon },
  { label: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/profile/devtusharpatil', icon: GfgIcon },
  { label: 'Medium', url: 'https://medium.com/@tusharispatil27', icon: MediumIcon },
];
