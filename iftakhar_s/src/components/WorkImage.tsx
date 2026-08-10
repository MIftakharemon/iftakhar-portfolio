import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  website?: string;
  playStore?: string;
  appStore?: string;
  github?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img src={props.image} alt={props.alt} />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
      {props.website && (
        <a
          className="work-visit-btn"
          href={props.website}
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
        >
          Visit Website <MdArrowOutward />
        </a>
      )}
      {(props.playStore || props.appStore) && (
        <div className="store-buttons">
          {props.playStore && (
            <a
              className="store-btn store-btn-play"
              href={props.playStore}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.372 2.372 0 0 1-.108-.34c-.076-.278-.076-.57 0-.848L3.609 1.814zm10.89 10.89l2.302 2.302-10.937 6.33 8.635-8.632zm-.707-.707L3.157 1.362l10.937 6.33-2.302 2.303zm0 1.414l2.302 2.303-2.302 2.303V13.41zm.707-.707l8.635-8.635-10.937 6.33 2.302 2.305z"/>
              </svg>
              Play Store
            </a>
          )}
          {props.appStore && (
            <a
              className="store-btn store-btn-app"
              href={props.appStore}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              App Store
            </a>
          )}
        </div>
      )}
      {props.github && (
        <a
          className="store-btn store-btn-github"
          href={props.github}
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
        >
          <FaGithub size={18} />
          GitHub
        </a>
      )}
    </div>
  );
};

export default WorkImage;
