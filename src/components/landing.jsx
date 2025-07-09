import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import ProfileImage from "../assets/profile-image.png";
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
          <div className="relative z-0 ml-20 before:absolute before:-top-16 before:-left-16 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              src={ProfileImage}
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-200 z-10 w-full max-w-[400px] laptop:max-w-[500px]"
            />
          </div>
        ) : (
          <img
            src={ProfileImage}
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-200 z-10 w-3/5 max-w-[350px] laptop:max-w-[550px]"
          />
        )}
      </div>
      {/* Main Section */}
      <div className="z-30 basis-2/5 mt-12 laptop:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center laptop:text-start">
            Jane{" "}
            <span className="mobile:relative mobile:text-deep-blue mobile:font-semibold z-20 mobile:before:content-[var(--brush)] before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              Esper
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center laptop:text-start">
            I create clean, scalable frontend solutions that users love
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
            className="bg-linear-to-r from-[#24cbff] via-[#fc59ff] to-[#ffbd0c] text-deep-blue rounded-sm py-2 px-6 font-semibold hover:bg-blue hover:text-white transition duration-500 "
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>

          <AnchorLink
            className=" rounded-r-sm bg-linear-to-r from-[#24cbff] via-[#fc59ff] to-[#ffbd0c] py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-8">
              Let's talk
            </div>
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
