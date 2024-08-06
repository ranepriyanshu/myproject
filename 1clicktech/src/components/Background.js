import React from "react";
import Image from "next/image";
import careers from "../../public/images/careers.jpg";

const Background = ({ jobListRef }) => {
  const scrollToJobList = () => {
    if (jobListRef && jobListRef.current) {
      jobListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <div className="relative w-full h-full ">
          <Image
            src={careers}
            alt="Header Background"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            className="hue-rotate-60 brightness-75"
            sizes="100vw,50vw, 33vw"
          />
        </div>
      </div>
      <div className="relative z-10 flex items-center h-full bg-black bg-opacity-60 p-6">
        <div className="text-left max-w-4xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-custom-green mb-6">
            Welcome to 1Click Tech!
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white mb-8">
            We are an innovative IT startup based in the heart of Gurugram. Our
            mission? Revolutionizing the SaaS landscape with cutting-edge
            software platforms and unparalleled DevOps services.
          </p>
          <button
            onClick={scrollToJobList}
            className="bg-custom-green py-2 px-6 rounded-lg shadow-md transition-colors duration-500 hover:bg-white"
          >
            Explore Careers
          </button>
        </div>
      </div>
    </header>
  );
};

export default Background;
