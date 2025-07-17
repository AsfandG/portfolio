import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "./line-gradient";
import skillsImage from "../assets/skills-image.png";
import { motion } from "motion/react";
import {
  backendSkills,
  frontendSkills,
  toolsAndOtherSkills,
} from "../assets/constants";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* Header and Image Section */}
      <div className="laptop:flex laptop:justify-between laptop:gap-16 mt-32">
        <motion.div
          className="laptop:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="1/3" />
          <p className="mt-10 mb-7">
            Here are the tools and technologies I've worked with to build
            responsive, dynamic, and user-friendly web applications
          </p>
        </motion.div>

        <div className="mt-16 laptop:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img src={skillsImage} alt="skills " className="z-10" />
            </div>
          ) : (
            <img src={skillsImage} alt="skills " className="z-10" />
          )}
        </div>
      </div>

      {/* Skills */}
      <div className="laptop:flex laptop:justify-between mt-16 gap-14">
        {/* Experience */}
        <motion.div
          className="laptop:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Frontend
              </p>
            </div>

            <div className="w-1/2 laptop:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            {frontendSkills.map((skill, index) => (
              <Skill skill={skill} key={index} />
            ))}
          </div>
        </motion.div>

        {/* Innovative */}
        <motion.div
          className="laptop:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Backend
              </p>
            </div>

            <div className="w-1/2 laptop:w-3/4 h-32 bg-dark-grey absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            {backendSkills.map((skill, index) => (
              <Skill skill={skill} key={index} />
            ))}
          </div>
        </motion.div>

        {/* Imaginative */}
        <motion.div
          className="laptop:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Development Tools
              </p>
            </div>

            <div className="w-1/2 laptop:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-5 flex flex-wrap gap-4">
            {toolsAndOtherSkills.map((skill, index) => (
              <Skill skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;

const Skill = ({ skill, index }) => {
  return (
    <div
      key={index}
      className="bg-charcoal text-white py-1 px-4 rounded inline-block text-sm"
    >
      {skill}
    </div>
  );
};
