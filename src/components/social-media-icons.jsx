import linkedInIcon from "../assets/linkedin-logo.png";

import github from "../assets/github.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center laptop:justify-start my-6 gap-7">
      <a
        href="https://www.linkedin.com/in/asfand11/"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500 size-6"
      >
        <img src={linkedInIcon} alt="linkedin-link" />
      </a>
      <a
        href="https://github.com/AsfandG"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500 size-6"
      >
        <img src={github} alt="github-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
