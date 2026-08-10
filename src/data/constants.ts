export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  MONGODB = "mongodb",
  MYSQL = "mysql",
  GIT = "git",
  GITHUB = "github",
  FIREBASE = "firebase",
  DOCKER = "docker",
  AWS = "aws",
  FLUTTER = "flutter",
  DART = "dart",
  ANDROID = "android",
  PYTHON = "python",
  PHP = "php",
  LARAVEL = "laravel",
  SUPABASE = "supabase",
  KONG = "kong",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Building interactive web experiences with JS magic!",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "JavaScript with superpowers — type safety for the win!",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "The foundation of every web page on the internet!",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Making the web beautiful, one pixel at a time!",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component-driven UI development at its finest!",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 6,
    name: "nextjs",
    label: "Next.js",
    shortDescription: "Full-stack React framework — SSR, SSG, and beyond!",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 7,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility-first CSS that just works!",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Server-side JavaScript for scalable APIs!",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 9,
    name: "express",
    label: "Express",
    shortDescription: "Fast, minimalist web framework for Node.js!",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 10,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL database for modern applications!",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 11,
    name: "mysql",
    label: "MySQL",
    shortDescription: "The world's most popular open-source database!",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git",
    shortDescription: "Version control that keeps code history safe!",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription: "Collaboration platform for developers worldwide!",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 14,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Google's app development platform — auth, DB, hosting!",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.DOCKER]: {
    id: 15,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerize apps for consistent deployment!",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.AWS]: {
    id: 16,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure for scalable applications!",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [SkillNames.FLUTTER]: {
    id: 17,
    name: "flutter",
    label: "Flutter",
    shortDescription: "Cross-platform mobile development with Dart!",
    color: "#02569B",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  [SkillNames.DART]: {
    id: 18,
    name: "dart",
    label: "Dart",
    shortDescription: "Modern language for Flutter and server-side apps!",
    color: "#0175C2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  [SkillNames.ANDROID]: {
    id: 19,
    name: "android",
    label: "Android",
    shortDescription: "Native mobile development with Java & Kotlin!",
    color: "#3DDC84",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 20,
    name: "python",
    label: "Python",
    shortDescription: "Versatile language for ML, APIs, and automation!",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.PHP]: {
    id: 21,
    name: "php",
    label: "PHP",
    shortDescription: "Server-side scripting for web development!",
    color: "#777bb4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.LARAVEL]: {
    id: 22,
    name: "laravel",
    label: "Laravel",
    shortDescription: "Elegant PHP framework for web artisans!",
    color: "#ff2d20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  [SkillNames.SUPABASE]: {
    id: 23,
    name: "supabase",
    label: "Supabase",
    shortDescription: "Open-source Firebase alternative with Postgres!",
    color: "#3ecf8e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  [SkillNames.KONG]: {
    id: 24,
    name: "kong",
    label: "Kong",
    shortDescription: "Cloud-native API gateway for microservices!",
    color: "#003459",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description?: string[];
  skills?: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2025",
    endDate: "Present",
    title: "System Engineer — Mobile App Development",
    company: "Sheba Platform Limited",
    description: [
      "Managing Flutter applications (Sheba XYZ, Sheba Manager, digiGO) serving 500K+ users with 99.5% uptime.",
      "Optimizing CI/CD pipelines, integrating SDKs and RESTful APIs for card payment and KYC/eKYC flows.",
      "Managing backend with Docker, AWS, Firebase, and Kong.",
    ],
    skills: [
      SkillNames.FLUTTER,
      SkillNames.DART,
      SkillNames.FIREBASE,
      SkillNames.AWS,
      SkillNames.DOCKER,
    ],
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "2025",
    title: "Mobile Application Developer",
    company: "Techzency, Dhaka",
    description: [
      "Built Flutter-based cross-platform apps with real-time chat, payments, and social features.",
      "Improved app performance by 30% and user engagement by 40% through optimization.",
      "Developed a blockchain system with wallet integration, transaction tracking, and Web3 smart contracts using MetaMask authentication.",
    ],
    skills: [
      SkillNames.FLUTTER,
      SkillNames.DART,
      SkillNames.FIREBASE,
      SkillNames.JS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode activated! Your eyes might need sunglasses.",
    "Caution: Bright mode ahead! Not for the faint of heart.",
    "Whoa, so bright! Are you sure you can handle this much clarity?",
    "Light mode on! Everything looks so clean and professional now.",
    "Flipping to light mode... A bold choice, respect!",
  ],
  dark: [
    "Dark mode activated! Welcome to the developer's natural habitat.",
    "Switching to dark mode... Ah, much easier on the eyes.",
    "Dark mode on! The way code was meant to be read.",
    "Welcome back to the shadows. Your eyes thank you.",
    "Dark mode engaged! Finally, some peace for the retinas.",
  ],
};

