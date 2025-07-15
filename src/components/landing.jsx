import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import ProfileImage from "../assets/profile-pic.jpg";
import DownloadIcon from "../assets/load.png";
import { motion } from "motion/react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "./social-media-icons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="laptop:flex laptop:justify-around laptop:items-center laptop:h-full gap-12 py-10"
    >
      {/* Image */}
      <div className="laptop:order-2 flex justify-center basis-2/6 z-10 mt-16 laptop:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 rounded-md overflow-hidden border border-gray-300">
            <img
              src={ProfileImage}
              alt="profile"
              className=" z-10 w-full max-w-[400px] laptop:max-w-[500px]"
            />
          </div>
        ) : (
          <img
            src={ProfileImage}
            alt="profile"
            className=" z-10 w-3/5 max-w-[350px] laptop:max-w-[550px]"
          />
        )}
      </div>
      {/* Main Section */}
      <div className="z-30 basis-2/5 mt-12 laptop:mt-32">
        <motion.div
          initial="hidden"
          className="text-charcoal"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-7xl font-playfair z-10 text-center laptop:text-start">
            Front-End Developer
          </p>

          <p className="mt-10 mb-7 text-sm text-center laptop:text-start">
            Hi, I am Asfandyar. A passionate Front-end React Developer based in
            Islamabad, Pakistan.
          </p>
        </motion.div>

        {/* Call To Actions */}
        <motion.div
          className="flex mt-5 justify-center laptop:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-[#1f2937] rounded-sm py-2 px-5 font-medium text-white transition duration-500 hover:bg-yellow flex items-center gap-2"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <span>
              <img src={DownloadIcon} alt="" className="size-6" />
            </span>{" "}
            Download Resume
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center laptop:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
