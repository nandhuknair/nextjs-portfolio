"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li> Docker, Kubernetes Bash, Python</li>
        <li>Jenkins</li>
        <li>Bash, Python</li>
        <li> AWS, Azure, GCP</li>
        <li>MySQL, Oracle</li>
        <li>Ansible, Chef, Puppet</li>
        <li> Git, GitHub</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>DevOps Internship Program - High Catch  </li>
        <li>Founder and Owner of ELOT</li>
      </ul>
      
    ),
  }, 
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor Of Computer Applilcation </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> Docker Essentials- IBM</li>
        <li>Scalable Web application on Kubernetes- IBM</li>
        <li>DevOps Engineering</li>
        <li>DevOps Fundamentals- IBM</li>


        
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          DevOps Engineer with expertise in CI/CD automation, cloud computing (AWS, Azure, GCP),
          containerization (Docker, Kubernetes), and IaC (Terraform, Ansible). Skilled in workflow
          optimization, deployment pipelines, and system reliability. Proficient in Linux, scripting (Bash,
          Python), Git, and monitoring (Prometheus, Grafana). Passionate about automation, best De
          vOps practices, and scalable solutions, with a drive to adopt cutting-edge technologies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
