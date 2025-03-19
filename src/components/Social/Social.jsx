import linkedinIcon from "../../assets/icons/social/linkedin.svg";
import githubIcon from "../../assets/icons/social/github.svg";
import blueskyIcon from "../../assets/icons/social/bluesky.svg";
import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/in/sebastianbraende" target="__blank">
        <img src={linkedinIcon} alt="LinkedIn icon" />
      </a>
      <a href="https://github.com/sbraende" target="__blank">
        <img src={githubIcon} alt="Github icon" />
      </a>
      <a href="https://sbraende.bsky.social" target="__blank">
        <img src={blueskyIcon} alt="Bluesky icon" />
      </a>
    </div>
  );
};

export default Social;
