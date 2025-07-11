import { motion } from "motion/react";
import LineGradient from "./line-gradient";
const images = import.meta.glob("../assets/*.jpeg", {
  eager: true,
  import: "default",
  query: "?url",
});

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

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          non error ut odio cum eum, illum numquam quaerat libero iste.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* Row 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-400px] text-2xl font-playfair font-semibold">
            Beautiful User Interfaces
          </div>
          <Project title="project 1" />
          <Project title="project 2" />

          {/* Row 2 */}
          <Project title="project 3" />
          <Project title="project 4" />
          <Project title="project 5" />

          {/* Row 3 */}
          <Project title="project 6" />
          <Project title="project 7" />
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-400px] text-2xl font-playfair font-semibold">
            Smooth User Experience
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

const Project = ({ title }) => {
  const overlayStyles =
    "absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue";
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const imageSrc = images[`../assets/${projectTitle}.jpeg`];

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa commodi
          officia, optio aliquam voluptas cupiditate illum ipsum doloremque
          tempora perferendis.
        </p>
      </div>
      <img src={`${imageSrc}`} alt="projectTitle" />
    </motion.div>
  );
};
