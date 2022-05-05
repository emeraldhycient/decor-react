import React, { useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import HeroSection from "../components/home/heroSection";
import OfferSection from "../components/home/offerSection";
import WhatwesellSection from "../components/home/whatwesellSection";
import Projects from "../components/home/Projects";
import DecorHimself from "../components/home/decorHimself";
import Schedule from "../components/home/schedule";

export default function Home() {
  return (
    <Layout
      title="Mpdesigns - home of decoration and home designs"
      description="Mpdesigns - home of decoration and home designs"
    >
      <Navbar />
      <HeroSection />
      <div className="mt-20">
        <OfferSection />
      </div>
      <div className="mt-10" id="whatwesellSection">
        <WhatwesellSection />
      </div>
      <div className="mt-10">
        <Projects />
      </div>
      <div className="mt-20">
        <DecorHimself />
      </div>
      <div className="mt-20">
        <Schedule />
      </div>
      <Footer />
    </Layout>
  );
}

/*export async function getServerSideProps() {
  // Fetch data from external API
  const data = await axios.get(`https://api.mpdesign.org/api/projects/all`);
  let projects = data.data.projects;
  projects = projects.slice(0, 8);

  // Pass data to the page via props
  return { props: { projects } };
}
*/
