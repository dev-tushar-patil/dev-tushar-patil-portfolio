import { Boxes, ShieldCheck, Webhook, Cloud, Send } from 'lucide-react';
import java from '../assets/icons/java-original.svg';
import spring from '../assets/icons/spring-original.svg';
import mysql from '../assets/icons/mysql-original.svg';
import hibernate from '../assets/icons/hibernate-original.svg';
import react from '../assets/icons/react-original.svg';
import html from '../assets/icons/html5-original.svg';
import css from '../assets/icons/css3-original.svg';
import javascript from '../assets/icons/javascript-original.svg';
import git from '../assets/icons/git-original.svg';
import github from '../assets/icons/github-original.svg';
import docker from '../assets/icons/docker-original.svg';

// Each skill has either an `image` (logo file) or an `icon` (Lucide component + colour).
export const skillCategories = [
  {
    title: 'Backend',
    skills: [
      { name: 'Java', image: java },
      { name: 'Spring Boot', image: spring },
      { name: 'Microservices', icon: Boxes, color: 'text-ink' },
      { name: 'Spring Security', icon: ShieldCheck, color: 'text-[#6DB33F]' },
      { name: 'REST APIs', icon: Webhook, color: 'text-[#0EA5E9]' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', image: mysql },
      { name: 'Hibernate', image: hibernate },
      { name: 'Spring Data JPA', image: spring },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React JS', image: react },
      { name: 'HTML', image: html },
      { name: 'CSS', image: css },
      { name: 'JavaScript', image: javascript },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', image: git },
      { name: 'GitHub', image: github },
      { name: 'Docker', image: docker },
      { name: 'Cloud AI', icon: Cloud, color: 'text-[#2563EB]' },
      { name: 'Cursor AI', icon: Send, color: 'text-ink' },
    ],
  },
];
