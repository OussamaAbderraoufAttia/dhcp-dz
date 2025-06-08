'use client';

import React from 'react';
import { ProjectCard } from "@/components/sub/project-card";

interface ProjectData {
  title: string;
  description: string;
  image: string;
  popupTitle: string;
  year: number;
  popupLogo: string;
  fullDescription: string;
  testimonials?: {
    quote: string;
    author: string;
    title?: string;
  }[];
}

const projectsData: ProjectData[] = [
  {
    title: "Digital Restaurant System",
    description: "A comprehensive system for managing university residence dining services.",
    image: "/logo1.png",
    popupTitle: "Digital Restaurant System (Detailed)",
    year: 2025,
    popupLogo: "/placeholder-logo.png",
    fullDescription: "As part of improving student living conditions in student residences, our company has developed a smart university catering management system. This solution allows students to view daily menus, book meals in advance, and access canteens via a card or QR code. Managers have access to a tool for inventory and flow management, optimizing resources and significantly reducing food waste.",
    testimonials: [
      {
        quote: "Thanks to DHCP, we were able to modernize our university dining management system, significantly reducing food waste while improving the student experience. An innovative and reliable solution!",
        author: "Mouhamed Boudiaf",
        title: "General Director, University of Algiers"
      }
    ]
  },
  {
    title: "Waste Management App",
    description: "Mobile application for efficient household waste management and recycling.",
    image: "/logo2.png",
    popupTitle: "Waste Management App (Detailed)",
    year: 2024,
    popupLogo: "/placeholder-logo.png",
    fullDescription: "Our company has developed a mobile application allowing residents to track the days collection trucks arrive in their neighborhood, report waste black spots, and receive information about recycling.",
    testimonials: [
      {
        quote: "The Waste Management App has revolutionized how we manage waste in our community. It’s an essential tool for promoting recycling and keeping track of waste collection schedules. Our residents now have a much easier way to participate in sustainable practices.",
        author: "Amina Khellaf",
        title: "Sustainability Officer, City of Algiers"
      }
    ]
  },
  {
    title: "Scholarship Management Portal",
    description: "Streamlined platform for managing university student scholarships.",
    image: "/logo4.png",
    popupTitle: "Scholarship Management Portal (Detailed)",
    year: 2023,
    popupLogo: "/placeholder-logo.png",
    fullDescription: "Our company has developed an online portal for the comprehensive management of university scholarships. This system allows students to submit their applications, track the progress of their applications, and view their payment history, while facilitating administrative processing for the relevant departments. It guarantees speed, efficiency, and transparency in the distribution of aid.",
    testimonials: [
      {
        quote: "The Scholarship Management Portal has greatly streamlined our application and processing workflow. It ensures transparency, efficiency, and ease of access for both students and administrators. We are now able to handle scholarships more effectively.",
        author: "Yassir Tebbakh",
        title: "Head of Financial Aid, University of Algiers"
      }
    ]
  },
  {
    title: "Mobile Subscription Platform",
    description: "Comprehensive solution for managing mobile service subscriptions.",
    image: "/logo3.png",
    popupTitle: "Mobile Subscription Platform (Detailed)",
    year: 2024,
    popupLogo: "/placeholder-logo.png",
    fullDescription: "DHCP has designed a platform that allows users to flexibly manage their mobile and data subscriptions. The platform includes features such as viewing current offers, managing top-ups, viewing invoices, and tracking data usage.",
    testimonials: [
      {
        quote: "The Mobile Subscription Platform has made managing mobile and data services so much easier for our users. The interface is intuitive, and the flexibility of managing subscriptions is unmatched. It’s a game-changer for our customer base.",
        author: "Khaled Djemai",
        title: "Product Manager, DHCP Telecom"
      }
    ]
  }
];

const Projects = () => {
  return (
    <div>
      {/* Projects Section - with dark mode support */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* Heading and description with dark mode text colors */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Explore our innovative solutions that are transforming educational institutions.
            </p>
          </div>

          {/* Grid - same responsive grid, no layout changes */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                popupTitle={project.popupTitle}
                year={project.year}
                popupLogo={project.image}
                fullDescription={project.fullDescription}
                testimonials={project.testimonials}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
