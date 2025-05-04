'use client';

import React from 'react';

import { ProjectCard } from "@/components/sub/project-card"

// Define the structure for a single project's data
interface ProjectData {
    // Data for the card view (matching your original ProjectCard)
    title: string; // Short title for the card
    description: string; // Short description for the card
    image: string; // Image for the card
  
    // Data for the popup view - Placeholders added
    popupTitle: string; // Full title for the popup
    year: number; // Year
    popupLogo: string; // Logo for the popup
    fullDescription: string; // Detailed description for the popup
    testimonials?: { // Array of testimonials for the popup (optional)
      quote: string;
      author: string;
      title?: string;
    }[];
  }
  
  // Array containing data for your projects, derived from your hardcoded ProjectCard list
const projectsData: ProjectData[] = [
    {
      title: "Digital Restaurant System",
      description: "A comprehensive system for managing university residence dining services.",
      image: "/logo1.png", // <-- Uses the original image path
      popupTitle: "Digital Restaurant System (Detailed)", // Placeholder Popup Title
      year: 2025, // Placeholder Year
      popupLogo: "/placeholder-logo.png", // Placeholder Popup Logo
      fullDescription: "As part of improving student living conditions in student residences, our company has developed a smart university catering management system. This solution allows students to view daily menus, book meals in advance, and access canteens via a card or QR code. Managers have access to a tool for inventory and flow management, optimizing resources and significantly reducing food waste.", // Placeholder Full Description
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
      image: "/logo2.png", // <-- Uses the original image path
      popupTitle: "Waste Management App (Detailed)", // Placeholder Popup Title
      year: 2024, // Placeholder Year
      popupLogo: "/placeholder-logo.png", // Placeholder Popup Logo
      fullDescription: "Our company has developed a mobile application allowing residents to track the days collection trucks arrive in their neighborhood, report waste black spots, and receive information about recycling.", // Placeholder Full Description
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
      image: "/logo4.png", // <-- Uses the original image path
      popupTitle: "Scholarship Management Portal (Detailed)", // Placeholder Popup Title
      year: 2023, // Placeholder Year
      popupLogo: "/placeholder-logo.png", // Placeholder Popup Logo
      fullDescription: "Our company has developed an online portal for the comprehensive management of university scholarships. This system allows students to submit their applications, track the progress of their applications, and view their payment history, while facilitating administrative processing for the relevant departments. It guarantees speed, efficiency, and transparency in the distribution of aid.", // Placeholder Full Description
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
      image: "/logo3.png", // <-- Uses the original image path
      popupTitle: "Mobile Subscription Platform (Detailed)", // Placeholder Popup Title
      year: 2024, // Placeholder Year
      popupLogo: "/placeholder-logo.png", // Placeholder Popup Logo
      fullDescription: "DHCP has designed a platform that allows users to flexibly manage their mobile and data subscriptions. The platform includes features such as viewing current offers, managing top-ups, viewing invoices, and tracking data usage.", // Placeholder Full Description
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
                 {/* Projects Section - Using your provided structure */}
    <section id="projects" className="py-20 bg-white"> {/* Uses your original section styling */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Uses your original heading and description */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore our innovative solutions that are transforming educational institutions.
          </p>
        </div>

        {/* Grid using your original responsive classes */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
          {/* Map through the projectsData array and render ProjectCard for each item */}
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index} // Using index as key for now, replace with a unique project ID if available
              title={project.title}
              description={project.description}
              image={project.image} // Uses the original image path from data
              popupTitle={project.popupTitle} // Uses placeholder popup title
              year={project.year} // Uses placeholder year
              popupLogo={project.image} // Uses placeholder popup logo
              fullDescription={project.fullDescription} // Uses placeholder full description
              testimonials={project.testimonials} // Uses placeholder testimonials array
            />
          ))}
        </div>
      </div>
    </section>
            </div>
    );

};

export default Projects;