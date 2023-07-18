import React from "react";
import Button from "./Button";
import { FiArrowRight } from "react-icons/fi";
// import profile from "../assets/profile-removebg-preview.png";
import profile2 from "../assets/profile2.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  Aos.init();

  return (

    <div id="home" className="max-w-[1215px] pt-[100px] h-auto lg:h-screen 2xl:h-auto mx-auto">

      <div className="flex flex-wrap-reverse px-5 justify-between items-center">
        <div className="w-full lg:px-0 mx-auto lg:w-[550px] xl:w-[650px] mb-[100px] lg:mb-0">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="100"
            className="text-title_sm md:text-hero_title font-[700] tracking-tighter mb-8 "
          >
            <span className="text-transparent bg-clip-text leading-[100%] bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500">
              I create products
            </span>{" "}
            <br />
            that delight and inspire people.
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="200"
            className="max-w-[600px] text-base_sm md:text-base font-[500] mb-10 dark:text-gray-300 text-gray-500 tracking-tight"
          >
            Hi! I’m Jake, a frontend developer based in Yangon,Myanmar. I create
            user-friendly interfaces for fast-growing startups.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="300"
            className="flex flex-col md:flex-row items-start md:items-center gap-5 ps-2"
          >
            <Button text={"Book a call"} />
            <div className="group flex items-center gap-3 font-[700] cursor-pointer">
              <p>Download CV </p>{" "}
              <FiArrowRight className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay="100"
          className="mx-auto mb-5 md:mb-0 w-[300px] lg:w-[400px] xl:w-[500px]"
        >
          <img src={profile2} />
        </div>
      </div>
    </div>
  );
};

export default Hero;