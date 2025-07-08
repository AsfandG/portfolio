import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import ProfileImage from "../assets/profile-image.png";
import { motion } from "motion/react";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="laptop:flex laptop:justify-between laptop:items-center laptop:h-full gap-16 py-10"
    >
      {/* Image */}
      <div className="laptop:order-2 flex justify-center basis-2/6 z-10 mt-16 laptop:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-16 before:-left-16 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              src={ProfileImage}
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-200 z-10 w-full max-w-[400px] laptop:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            src={ProfileImage}
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-200 z-10 w-3/5 max-w-[350px] laptop:max-w-[550px]"
          />
        )}

        {/* Main Section */}
        <div className="z-30 basis-3/6 mt-12 laptop:mt-32">
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
              <span className="mobile:relative mobile:text-deep-blue mobile:font-semibold z-20">
                Esper
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
