import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";
const PLACEHOLDER_IMG = "/assets/logo-dark.svg";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({
  live,
  github,
  appStore,
}: {
  live?: string;
  github?: string;
  appStore?: string;
}) => {
  if (!live && !github && !appStore) return null;
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {github && github !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={github}
        >
          <Button variant={"outline"} size={"sm"}>
            GitHub
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {appStore && appStore !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={appStore}
        >
          <Button variant={"outline"} size={"sm"}>
            App Store
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  flutter: brand("Flutter", "flutter-mono.svg"),
  dart: brand("Dart", "dart-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  restapi: brand("RESTful APIs", "nodedotjs-mono.svg"),
  getx: brand("GetX", "dart-mono.svg"),
  provider: brand("Provider", "dart-mono.svg"),
  riverpod: brand("Riverpod", "dart-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  php: brand("PHP", "php-mono.svg"),
  laravel: brand("Laravel", "laravel-mono.svg"),
  mysql: brand("MySQL", "mysql-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  tensorflow: brand("TensorFlow", "python-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  aws: brand("AWS", "aws-mono.svg"),
  kong: brand("Kong", "nginx-mono.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
  appStore?: string;
};

const projects: Project[] = [
  {
    id: "sheba-xyz-website",
    category: "Official Website",
    title: "Sheba XYZ Website",
    src: `${BASE_PATH}/sheba-xyz/sheba_xyz_website.jpg`,
    screenshots: ["sheba_xyz_website.jpg"],
    live: "https://www.sheba.xyz/",
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.laravel, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Official website for Sheba XYZ — a service platform built with Laravel, PHP, and MySQL. Responsive design with SEO optimization.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <SlideShow images={[`${BASE_PATH}/sheba-xyz/sheba_xyz_website.jpg`]} />
        </div>
      );
    },
  },
  {
    id: "sheba-xyz-app",
    category: "Service Platform",
    title: "Sheba XYZ App",
    src: `${BASE_PATH}/sheba-xyz/sheba_xyz_app.png`,
    screenshots: ["sheba_xyz_app.png"],
    live: "https://play.google.com/store/apps/details?id=xyz.sheba.customersapp",
    appStore: "https://apps.apple.com/in/app/sheba-xyz-service-platform/id1399019504",
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.dart],
      backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.restapi, PROJECT_SKILLS.getx],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Cross-platform mobile app for Sheba XYZ service platform. Built with Flutter, Firebase, and RESTful APIs. Available on both Play Store and App Store.
          </TypographyP>
          <ProjectsLinks live={this.live} appStore={this.appStore} />
          <SlideShow images={[`${BASE_PATH}/sheba-xyz/sheba_xyz_app.png`]} />
        </div>
      );
    },
  },
  {
    id: "sheba-manager",
    category: "Operations App",
    title: "Sheba Manager",
    src: `${BASE_PATH}/sheba-manager/sheba_manager.png`,
    screenshots: ["sheba_manager.png"],
    live: "https://play.google.com/store/apps/details?id=xyz.sheba.managerapp",
    appStore: "https://apps.apple.com/in/app/sheba-manager/id6738626092",
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.dart],
      backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.restapi, PROJECT_SKILLS.provider],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Service monitoring and operations management app for Sheba Platform Limited. Built with Flutter, Firebase, and Provider state management.
          </TypographyP>
          <ProjectsLinks live={this.live} appStore={this.appStore} />
          <SlideShow images={[`${BASE_PATH}/sheba-manager/sheba_manager.png`]} />
        </div>
      );
    },
  },
  {
    id: "digigo",
    category: "HRM System",
    title: "DigiGO",
    src: `${BASE_PATH}/digigo/digigo_app.png`,
    screenshots: ["digigo_app.png"],
    live: "https://play.google.com/store/apps/details?id=xyz.sheba.emanager",
    appStore: "https://apps.apple.com/in/app/digigo-hr-management-app/id1491939278",
    skills: {
      frontend: [PROJECT_SKILLS.flutter, PROJECT_SKILLS.dart],
      backend: [PROJECT_SKILLS.firebase, PROJECT_SKILLS.restapi, PROJECT_SKILLS.riverpod],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            HRM management system app built with Flutter, Firebase, and Riverpod. Manages employee workflows and HR operations.
          </TypographyP>
          <ProjectsLinks live={this.live} appStore={this.appStore} />
          <SlideShow images={[`${BASE_PATH}/digigo/digigo_app.png`]} />
        </div>
      );
    },
  },
  {
    id: "lung-cancer-detection",
    category: "Machine Learning",
    title: "Lung Cancer Detection",
    src: `${BASE_PATH}/lung-cancer/lung_cancer_detection.png`,
    screenshots: ["lung_cancer_detection.png"],
    live: "https://github.com/MIftakharemon/Prediction_of_Lung_Cancer.git",
    github: "https://github.com/MIftakharemon/Prediction_of_Lung_Cancer.git",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.tensorflow],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Deep learning model for lung cancer detection using Python, TensorFlow, and InceptionV3 architecture. Analyzes medical images for early detection.
          </TypographyP>
          <ProjectsLinks live={this.live} github={this.github} />
          <SlideShow images={[`${BASE_PATH}/lung-cancer/lung_cancer_detection.png`]} />
        </div>
      );
    },
  },
];

export default projects;
