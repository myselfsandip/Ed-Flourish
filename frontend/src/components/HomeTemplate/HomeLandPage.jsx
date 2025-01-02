import Logo from "../../../logo/bulb.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBarFront from "./NavBarFront.jsx";
import ResourceGrid from "./ResourceGrid.jsx";
import WhyChooseUs from "./WhyChooseUs.jsx";
import BlogSection from "./BlogSection.jsx";
import Footer from "./Footer.jsx";
import WelcomeLanding from "../WelcomeLanding.jsx"; // Make sure this file exists in the same directory

console.log(Logo); // Keep this for debugging

const HomeLandPage = () => {
  return (
    <div className="pt-16">
      {" "}
      {/* Add top padding to account for fixed navbar */}
      <NavBarFront />
      <WelcomeLanding />
      <ResourceGrid />
      <WhyChooseUs />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default HomeLandPage;
