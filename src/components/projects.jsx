import { motion } from "motion/react";
import LineGradient from "./line-gradient";

import Petvet from "../assets/petvet.png";
import Saltmine from "../assets/saltmine.png";
import Forever from "../assets/forever.png";
import TippieDoo from "../assets/tippie-doo.png";
import RealState from "../assets/real-state.png";
import HomePlate from "../assets/home-plate.png";
import { a } from "motion/react-client";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const projectsData = [
  {
    id: 2,
    title: "Tippie Doo",
    img: TippieDoo,
    link: "https://www.tippie-doo.com/home",
  },
  {
    id: 1,
    title: "Saltmine",
    img: Saltmine,
    link: "https://saltmines-nine.vercel.app/",
  },
  {
    id: 3,
    title: "Forever",
    img: Forever,
    link: "https://ecommerce-app-fcts.vercel.app/",
  },
  {
    id: 4,
    title: "Home Plate",
    img: HomePlate,
    link: "https://home-plate.vercel.app/",
  },
  {
    id: 5,
    title: "Real State",
    img: RealState,
    link: "https://real-state-iota-eight.vercel.app/",
  },
  {
    id: 6,
    title: "Petvet",
    img: Petvet,
    link: "https://pets-delta-nine.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32">
      {/* Headings */}
      <motion.div
        className="laptop:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          A selection of projects I've built to apply my skills in real-world
          scenarios. Each project highlights my experience in frontend
          development and also reflects my ongoing journey toward mastering
          full-stack web development
        </p>
      </motion.div>

      {/* Projects */}
      <div className="">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {projectsData.map((item) => (
            <Project item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

const Project = ({ item }) => {
  const { id, title, link, img } = item;
  const overlayStyles =
    "absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue";

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        variants={projectVariant}
        className="relative h-48 rounded overflow-hidden"
      >
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
        </div>
        <img src={img} alt={title} className="h-full" />
      </motion.div>
    </a>
  );
};
