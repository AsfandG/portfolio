import { motion } from "motion/react";
import LineGradient from "./line-gradient";
import ContactImage from "../assets/contact-me.jpg";
import EmailIcon from "../assets/gmail.png";
import LocationIcon from "../assets/pin.png";
import PhoneIcon from "../assets/telephone.png";

const ContactMe = () => {
  return (
    <section id="contact" className="py-16 laptop:py-30">
      <div className="flex flex-col laptop:flex-row gap-10 laptop:justify-between laptop:gap-20">
        {/* image section */}
        <div className="laptop:w-1/2">
          <img src={ContactImage} alt="contact-me" className="rounded-sm" />
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
              <p className="font-playfair font-semibold text-4xl">
                Let's Get in Touch
              </p>
              <div className="flex justify-center mt-5">
                <LineGradient width="w-4/5" />
              </div>
            </div>
            <p className="mt-3 mb-6 text-sm">
              Got a question or a project in mind? Let's connect and make it
              happen
            </p>
            <div className="text-sm flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <span>
                  {" "}
                  <img
                    src={LocationIcon}
                    alt="linkedin-link"
                    className="size-4"
                  />
                </span>
                I-10/2, I-10, Islamabad, Pakistan
              </div>
              <div>
                <a
                  href="mailto:asfandm17@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-6"
                >
                  <span>
                    <img
                      src={EmailIcon}
                      alt="linkedin-link"
                      className="size-4"
                    />
                  </span>
                  asfandm17@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="tel:+923148932104"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-6"
                >
                  <span>
                    <img src={PhoneIcon} alt="github-link" className="size-4" />
                  </span>
                  +923148932104
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
