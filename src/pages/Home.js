import React from "react";
import HeroSection from "../components/HeroSection";
import SobreNosotros from "../components/SobreNosotros";
import { homeObjOne } from "../components/SobreNosotros/Data";

function Home() {
  return (
    <>
      <HeroSection />
      <SobreNosotros {...homeObjOne} />
    </>
  );
}

export default Home;
