"use client";
import React from 'react';
import { ServiceCard } from '@/components/sub/service-card';

interface ServiceData {
  title: string;
  description: string;
  icon: string;
}

const servicesData: ServiceData[] = [
  {
    title: "Custom Digital Solutions",
    description: "Creating innovative platforms designed to optimize management and facilitate digital communication.",
    icon: "Cpu"
  },
  {
    title: "Intelligent Data Exploitation",
    description: "Using data analysis and AI to transform raw information into useful knowledge for decision-making.",
    icon: "BarChart"
  },
  {
    title: "Integrated Management Tools",
    description: "Implementing ERP, CRM, and other business solutions tailored to each organization's specific requirements.",
    icon: "Settings"
  },
  {
    title: "Digital Transformation Support",
    description: "Integrating new technologies into strategies for agile and evolving environments.",
    icon: "RefreshCw"
  },
  {
    title: "Skills Development",
    description: "Ensuring continuous training for teams to fully master deployed tools.",
    icon: "GraduationCap"
  },
  {
    title: "Personalized Support",
    description: "Providing ongoing assistance to achieve sustainable autonomy with new technologies.",
    icon: "HeadphonesIcon"
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We provide comprehensive digital solutions tailored to the unique needs of educational institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
