import jewello from '../assets/projects/jewello.svg';
import erp from '../assets/projects/acme-erp.svg';
import pos from '../assets/projects/pos.svg';
import kalagram from '../assets/projects/kalagram.svg';
import caRahul from '../assets/projects/ca-rahul-patil.svg';
import jayashree from '../assets/projects/jayashree.svg';
import myFinance from '../assets/projects/myfinance.svg';
import designer from '../assets/projects/graphic-designer.svg';
import construction from '../assets/projects/construction-mgmt.svg';

/*
 * To add a project: append an object to the right list.
 * `url` is optional. Set it to the live / demo / GitHub link when you have one;
 * cards without a url render without a link.
 * Replace `image` with a real screenshot (any size; it is cropped to 8:3).
 */

export const companyName = 'ACME Infovision Systems Pvt. Ltd.';

export const companyProjects = [
  {
    id: '01',
    title: 'Jewello App',
    description: 'Jewellery E-commerce and Savings Schemes Application.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Microservices'],
    image: jewello,
    url: '',
  },
  {
    id: '02',
    title: 'ACME ERP Software',
    description: 'Enterprise Resource Planning and Business Management Software.',
    tags: ['Java', 'Spring Boot', 'Microservices', 'MySQL'],
    image: erp,
    url: '',
  },
  {
    id: '03',
    title: 'POS Android App',
    subtitle: 'Point of Sale Application',
    description: 'Retail Billing, Inventory and Sales Management.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    image: pos,
    url: '',
  },
];

export const personalProjects = [
  {
    id: '01',
    title: 'Kalagram Website',
    description: 'Art and Heritage Website.',
    tags: ['React JS', 'Spring Boot', 'MySQL'],
    image: kalagram,
    url: '',
  },
  {
    id: '02',
    title: 'CA Rahul Patil Website',
    description: 'Chartered Accountant Website.',
    tags: ['React JS', 'Responsive'],
    image: caRahul,
    url: '',
  },
  {
    id: '03',
    title: 'Jayashree Construction Website',
    description: 'Construction Company Website.',
    tags: ['React JS', 'Spring Boot', 'MySQL'],
    image: jayashree,
    url: '',
  },
  {
    id: '04',
    title: 'MyFinance WebApp',
    description: 'Personal Finance and Small Business Financial Tracking Application.',
    tags: ['React JS', 'Recharts', 'REST APIs'],
    image: myFinance,
    url: '',
  },
  {
    id: '05',
    title: 'Graphic Designer Portfolio',
    description: 'Professional Portfolio Website for a Graphic Designer.',
    tags: ['React JS', 'Tailwind', 'Animation'],
    image: designer,
    url: '',
  },
  {
    id: '06',
    title: 'Construction Management WebApp',
    description: 'Construction Project and Site Management Application.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'React JS'],
    image: construction,
    url: '',
  },
];

// Shown in the "More Projects" strip under the gallery.
export const upcomingProjects = [
  'Portfolio (Mechanical Engineer)',
  'Expense Tracker',
  'Office Cricket Tournament',
];
