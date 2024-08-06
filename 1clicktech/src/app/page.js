"use client";

import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Mid from "@/components/Mid";
import JobList from "@/components/JobList";
import Choose from "@/components/Choose";
import Application from "@/components/Application";
import Footer from "@/components/Footer";

const Page = () => {
  const jobListRef = useRef(null);

  return (
    <div className="relative">
      <Background jobListRef={jobListRef} />
      <Navbar />
      <Mid />
      <JobList ref={jobListRef} />
      <Choose />
      <Application />
      <Footer />
    </div>
  );
};

export default Page;
