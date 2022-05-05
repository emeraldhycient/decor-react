import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import HeroSection from "../components/home/heroSection";
import OfferSection from "../components/home/offerSection";
import WhatwesellSection from "../components/home/whatwesellSection";
import Projects from "../components/home/Projects";
import DecorHimself from "../components/home/decorHimself";
import Schedule from "../components/home/schedule";

export default function Home({ projects }) {
  /*const [projects, setprojects] = useState([
    { id: 45, link: "/portfolio/port1", src: "/images/apart2.png" },
    { id: 56, link: "/portfolio/port2", src: "/images/apart4.png" },
    { id: 23, link: "/portfolio/port3", src: "/images/apart3.png" },
    { id: 34, link: "/portfolio/port4", src: "/images/apart1.png" },
    { id: 21, link: "/portfolio/port5", src: "/images/apart2.png" },
    { id: 2, link: "/portfolio/port6", src: "/images/apart4.png" },
    { id: 40, link: "/portfolio/port7", src: "/images/apart3.png" },
    { id: 25, link: "/portfolio/port8", src: "/images/apart1.png" },
  ]);*/
  return (
    <Layout
      title="Mpdesigns - home of decoration and home designs"
      description="Mpdesigns - home of decoration and home designs"
    >
      <Navbar />
      <HeroSection />
      <OfferSection />
      <div className="mt-10" id="whatwesellSection">
        <WhatwesellSection />
      </div>
      <div className="mt-10">
        <Projects projects={projects} />
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

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await axios.get(`http://127.0.0.1:8000/api/projects/all`);
  let projects = data.data.projects;
  projects = projects.slice(0, 8);

  // Pass data to the page via props
  return { props: { projects } };
}
