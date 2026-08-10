import { useState, useCallback, useEffect, useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface Project {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  website?: string;
  playStore?: string;
  appStore?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Sheba XYZ Website",
    category: "Official Website — Service Platform",
    tools: "JS, Laravel, PHP, MySQL, Responsive, SEO",
    image: "/images/sheba_xyz_website.jpg",
    link: "https://www.sheba.xyz/",
    website: "https://www.sheba.xyz/",
  },
  {
    title: "Sheba XYZ App",
    category: "Service Platform — Mobile",
    tools: "Flutter, Firebase, RESTful APIs, GetX",
    image: "/images/sheba_xyz_app.png",
    link: "https://play.google.com/store/apps/details?id=xyz.sheba.customersapp",
    playStore: "https://play.google.com/store/apps/details?id=xyz.sheba.customersapp",
    appStore: "https://apps.apple.com/in/app/sheba-xyz-service-platform/id1399019504",
  },
  {
    title: "Sheba Manager",
    category: "Service Monitoring & Operations App",
    tools: "Flutter, Firebase, RESTful APIs, Provider",
    image: "/images/sheba_manager.png",
    link: "https://play.google.com/store/apps/details?id=xyz.sheba.managerapp",
    playStore: "https://play.google.com/store/apps/details?id=xyz.sheba.managerapp",
    appStore: "https://apps.apple.com/in/app/sheba-manager/id6738626092",
  },
  {
    title: "Digigo",
    category: "HRM Management System",
    tools: "Flutter, Firebase, RESTful APIs, Riverpod",
    image: "/images/digigo_app.png",
    link: "https://play.google.com/store/apps/details?id=xyz.sheba.emanager",
    playStore: "https://play.google.com/store/apps/details?id=xyz.sheba.emanager",
    appStore: "https://apps.apple.com/in/app/digigo-hr-management-app/id1491939278",
  },
  {
    title: "Lung Cancer Detection using Machine Learning",
    category: "ML — Deep Learning Model",
    tools: "Python, TensorFlow, InceptionV3, ML",
    image: "/images/lung_cancer_detection.png",
    link: "https://github.com/MIftakharemon/Prediction_of_Lung_Cancer.git",
    github: "https://github.com/MIftakharemon/Prediction_of_Lung_Cancer.git",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const resetAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
  }, []);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetAutoplay]);

  const handleManualNav = (action: () => void) => {
    action();
    resetAutoplay();
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleManualNav(goToNext);
      } else {
        handleManualNav(goToPrev);
      }
    }
  };

  const handleWheel = useRef(false);

  useEffect(() => {
    const container = document.querySelector('.carousel-track-container');
    if (!container) return;

    let wheelTimeout: ReturnType<typeof setTimeout>;

    const onWheel = (e: Event) => {
      const we = e as WheelEvent;
      if (Math.abs(we.deltaX) > 30) {
        e.preventDefault();
        if (handleWheel.current) return;
        handleWheel.current = true;
        if (we.deltaX > 0) {
          handleManualNav(goToNext);
        } else {
          handleManualNav(goToPrev);
        }
        wheelTimeout = setTimeout(() => {
          handleWheel.current = false;
        }, 800);
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', onWheel);
      clearTimeout(wheelTimeout);
    };
  }, [goToNext, goToPrev]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={() => handleManualNav(goToPrev)}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => handleManualNav(goToNext)}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div
            className="carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                        website={project.website}
                        playStore={project.playStore}
                        appStore={project.appStore}
                        github={project.github}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => handleManualNav(() => goToSlide(index))}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
