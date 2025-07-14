import linkedInIcon from "../assets/linkedin-logo2.png";
import github from "../assets/github-logo.png";

const Footer = () => {
  return (
    <footer className="h-50 md:h-40 bg-charcoal pt-10 pb-12">
      <div className="w-5/6 mx-auto">
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
        <div className="md:flex justify-center  md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            ASFANDYAR
          </p>
          <p className="font-playfair text-sm text-yellow">
            &copy;2025. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
