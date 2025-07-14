import SocialMediaIcons from "./social-media-icons";

const Footer = () => {
  return (
    <footer className="h-50 md:h-40 bg-charcoal pt-10 pb-12">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
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
