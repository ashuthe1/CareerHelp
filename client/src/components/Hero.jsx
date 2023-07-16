import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../Context/userContext";
import Ratings from "./Ratings";

import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";
import heroImg from "../assets/hero-img.svg";
import homeImg from "../assets/bg.jpg";
import Contact from "./Contact";

const Hero = () => {
  const { user } = useContext(UserContext);
  const id = user?.id;

  return (
    <main
      style={{
        backgroundImage: `url(${homeImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full flex-col justify-around md:px-40 min-h-[90vh]">
        <div className="flex flex-col p-5 md:my-5 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full text-3xl font-extrabold text-center text-gray-800 uppercase md:text-5xl"
          >
            "Connecting You to Your
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-semibold text-amber-900 mx-2"
            >
              DREAM
            </motion.span>
            Career"
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full mt-5 mb-10 mx-auto text-xl font-serif text-center text-gray-700"
          >
            Our job website is designed to simplify the job search process and
            help job seekers land their dream careers. We offer a wide range of
            job opportunities from top employers, along with helpful resources
            and tools to enhance your job search experience.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-5 lg:-mb-40"
          >
            <Link to="/jobs">
              <Button
                color="amber"
                variant="gradient"
                className="mr-4 flex justify-center items-center gap-2"
                fullWidth
              >
                <BriefcaseIcon className="h-5 w-5" />
                See All Openings
              </Button>
            </Link>
            <Link to={id ? "/addjob" : "/register"}>
              <Button
                color="cyan"
                variant="gradient"
                className="mr-4 flex justify-center items-center gap-2 md:ml-5"
                fullWidth
              >
                <BriefcaseIcon className="h-5 w-5" />
                Post a Job
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative block w-full mx-auto mt-6 md:mt-0 md:-mb-20">
            <img
              src={heroImg}
              alt="HeroImg"
              className="max-w-xs m-auto lg:max-w-3xl"
            />
          </div>
        </motion.div>
      </div>
      <Ratings />
      <Contact />
    </main>
  );
};

export default Hero;
