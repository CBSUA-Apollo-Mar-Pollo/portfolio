import Head from "next/head";
import Image from "next/image";

import { About, Footer, Header, Skills, Testimonial, Work } from "../container";
import { Navbar } from "../components";
import { client } from "../client";

export default function Home({
  aboutData,
  workData,
  skillsData,
  experiencesData,
  testimonialsData,
  brandsData,
}) {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About data={aboutData} />
      <Work data={workData} />
      <Skills skillsData={skillsData} experiencesData={experiencesData} />
      <Testimonial
        testimonialsData={testimonialsData}
        brandsData={brandsData}
      />
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const queryAbouts = `*[_type == "abouts"]`;
  const aboutData = await client.fetch(queryAbouts);

  const queryWorks = '*[_type == "works"]';
  const workData = await client.fetch(queryWorks);

  const querySkills = '*[_type == "skills"]';
  const skillsData = await client.fetch(querySkills);

  const queryExperience = '*[_type == "experiences"]';
  const experiencesData = await client.fetch(queryExperience);

  const queryTestimionials = '*[_type == "testimonials"]';
  const testimonialsData = await client.fetch(queryTestimionials);

  const queryBrands = '*[_type == "brands"]';
  const brandsData = await client.fetch(queryBrands);

  return {
    props: {
      aboutData,
      workData,
      skillsData,
      experiencesData,
      testimonialsData,
      brandsData,
    },
  };
};
