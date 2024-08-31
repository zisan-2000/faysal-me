import React from "react";
import Button from "./Button";
import ProfileImage from "./ProfileImage";

const HeroSection = () => {
  return (
    <section className="hero themeChange grid grid-cols-1 items-center gap-8 md:grid-cols-12">
      {/* Profile Image Section for Small Devices */}
      <div className="order-1 flex justify-center md:order-2 md:col-span-5 md:justify-end">
        <ProfileImage />
      </div>

      {/* Text Section */}
      <div className="textColor order-2 flex-1 space-y-6 md:order-1 md:col-span-7">
        <h4 className="text-2xl font-bold md:text-2xl">Employee, ICDDR,B</h4>
        <h1 className="text-5xl font-bold md:text-7xl">
          Hello I'm <span className="text-green-500">Md. Faysal Ahmed</span>
        </h1>
        <p className="text-lg md:text-xl">
          Me Faysal Ahmed is a dedicated professional employee at ICDDR,B, an
          internationally renowned institution committed to solving major public
          health challenges. With a strong background in his field, Faysal plays
          a vital role in supporting ICDDR,B's mission to innovate and improve
          global health outcomes. Through his expertise and commitment, Faysal
          contributes to groundbreaking research and the implementation of
          life-saving initiatives, reflecting his passion for making a positive
          impact on communities worldwide. His work at ICDDR,B not only supports
          the organization's mission but also demonstrates his dedication to
          advancing public health and driving meaningful change.
        </p>
        <Button text="Download CV" />
        <div className="social-icons mt-4 flex space-x-4">
          {/* Social media icons can be added here */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
