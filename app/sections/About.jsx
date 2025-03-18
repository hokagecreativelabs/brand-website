import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full max-w-[1440px] h-[429px] pt-5 pb-24 mx-auto">
      <div className="px-4 text-center md:text-left flex flex-col w-full max-w-[800px] h-[309px] gap-10 mx-auto">
        {/* Placeholder for the image */}
        <div className="">
          <img src="/assets/images/about-icon.webp" alt="Icon" className="" />
        </div>
        {/* Text content */}
        <p className="text-[32px] font-nohemi font-[500] leading-[116%] tracking-[-0.04em] text-[#667185]">
          At <span className="text-black">HCL</span>, we specialize in crafting{" "}
          <span className="font-[600] text-black">next-gen web experiences</span>{" "}
          that blend creativity with cutting-edge technology.
        </p>
        <p className="text-[32px] font-nohemi font-[500] leading-[116%] tracking-[-0.04em] text-[#667185] text">
          We deliver tailored solutions for{" "}
          <span className="font-[600] text-black">
            upgrading your site or creating a new digital platform.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
