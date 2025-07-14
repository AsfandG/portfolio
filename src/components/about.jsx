import AboutMeImage from "../assets/about-me.jpg";
import LineGradient from "./line-gradient";
import { motion } from "motion/react";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 laptop:py-30">
      <div className="flex flex-col laptop:flex-row gap-10 laptop:justify-between laptop:gap-20">
        {/* image section */}
        <div className="">
          <img src={AboutMeImage} alt="about-me" className="rounded-sm" />
        </div>
        {/* Text Section */}
        <div className="">
          <motion.div
            className="sm:w-4/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className=" text-center">
              <p className="font-playfair font-semibold text-4xl">ABOUT ME</p>
              <div className="flex justify-center mt-5">
                <LineGradient width="w-4/5" />
              </div>
            </div>
          </motion.div>
          <p className="mt-3 mb-6 text-sm">
            I'm a passionate Frontend Developer with 3 years of hands-on
            experience building responsive, user-focused web applications using
            React.js and Next.js. Currently, I'm expanding my skillset into
            full-stack development with the MERN stack, working daily with
            Node.js, Express, and MongoDB. I enjoy turning complex problems into
            simple, intuitive interfaces and continuously push myself to learn
            and grow. Whether it's crafting pixel-perfect UIs or building
            scalable backend APIs, I take pride in writing clean, efficient
            code. I'm now looking for opportunities to collaborate on meaningful
            projects and contribute to teams where innovation and creativity are
            valued.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
