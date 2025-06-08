"use client";
import React from "react";
import { TeamMember } from "../sub/team-member";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Team
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Meet the talented professionals behind our innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember
            name="Oussama Abderraouf ATTIA"
            role="Project Manager"
            image="/person.png"
            linkedin="www.linkedin.com/in/oussama-abderraouf-attia-494b32225"
            cv="https://drive.google.com/file/d/1wsym0-sWgTx1PUg59jCQTm_dAPehvlvH/view?usp=sharing"
          />
          <TeamMember
            name="Amira BEN ATMANE"
            role="Quality Tester"
            image="/person.png"
            linkedin="https://www.linkedin.com/in/amira-ben-atmane-8b0a4b260/"
            cv="https://drive.google.com/file/d/1f4C20ujPPDKoNSz6dnTYsFTxi2BXh78X/view?usp=sharing"
          />
          <TeamMember
            name="Maria BELHADJ"
            role="Marketing Manager"
            image="/person.png"
            linkedin="https://www.linkedin.com/in/maria-belhadj-a83a4b260/"
            cv="/cv of Maria.pdf"
          />
          <TeamMember
            name="Ali MAHDI"
            role="Software Engineer"
            image="/person.png"
            linkedin="https://www.linkedin.com/in/mahdi-ali-59b08829b/"
            cv="/cv of Mahdi (not found sorry :/).pdf"
          />
          <TeamMember
            name="Boutaina DOULATE SEROURI"
            role="Finance Manager"
            image="/person.png"
            linkedin="https://linkedin.com/in/boutaina-doulate-serouri-8b0a4b260/"
            cv="https://drive.google.com/file/d/1b9crhzcXTn-RCabv8sKYEMi2eNyS2pHW/view?usp=sharing"
          />
          <TeamMember
            name="Malek BOUKABOUS"
            role="UI/UX Designer"
            image="/person.png"
            linkedin="https://www.linkedin.com/in/mm-malekboukabous/"
            cv="https://drive.google.com/file/d/10qHsfuBQnEk0Gn0oBoR7TCnPKqOz53R4/view?usp=sharing"
          />
          <TeamMember
            name="Yasmine HAOUAS"
            role="Systems Manager"
            image="/person.png"
            linkedin="https://www.linkedin.com/in/haouas-yasmine-102a1825b/"
            cv="https://docs.google.com/document/d/1OZH1xPrV5oUjXehAEIaXOQEj7D9tw9EBVisO6CCcmi8/edit?usp=sharing"
          />
          <TeamMember
            name="Ishaq Belhadj MAHDI"
            role="AI Specialist"
            image="/person.png"
            linkedin="https://www.linkedin.com/in/ishaq-belhadj-mehdi-995245219/"
            cv="/cv of Ishaq (not found DUH :/).pdf"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
