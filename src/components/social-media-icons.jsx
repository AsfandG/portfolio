import linkedInIcon from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center laptop:justify-start my-6 gap-7">
      <a
        href="http://www.linkedIn.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500 size-6"
      >
        <img src={linkedInIcon} alt="linkedin-link" />
      </a>
      <a
        href="http://www.twitter.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500 size-6"
      >
        <img src={twitter} alt="twitter-link" />
      </a>
      <a
        href="http://www.facebook.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500 size-6"
      >
        <img src={facebook} alt="facebook-link" />
      </a>
      <a
        href="http://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500 size-6"
      >
        <img src={instagram} alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
