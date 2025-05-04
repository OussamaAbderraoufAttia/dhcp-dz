'use client';

import React from 'react';

import { StatCard } from "@/components/sub/stat-card"


import {
  Building2,
  Calendar, 
  DollarSign,
  Lightbulb,
  Search,
  Users,
} from "lucide-react"



const AboutUs =() =>{
    return(
        <div>
                  <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Founded in 2022, DHCP is an Algerian technology company created by passionate young professionals with the
              dream of building a 100% Algerian digital future that meets international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Lightbulb className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Innovation</h4>
                    <p className="text-gray-600">Constantly pushing boundaries to create cutting-edge solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">National Commitment</h4>
                    <p className="text-gray-600">Dedicated to building a digital future for Algeria.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Search className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Quality & Efficiency</h4>
                    <p className="text-gray-600">Delivering high-quality solutions that drive real results.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Transparency</h4>
                    <p className="text-gray-600">Building trust through open communication and honest practices.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <StatCard icon={<Users className="h-8 w-8 text-blue-600" />} value="69" label="Employees" />
              <StatCard icon={<Calendar className="h-8 w-8 text-blue-600" />} value="2022" label="Founded" />
              <StatCard
                icon={<DollarSign className="h-8 w-8 text-blue-600" />}
                value="145M DZD"
                label="Annual Revenue"
              />
              <StatCard icon={<Lightbulb className="h-8 w-8 text-blue-600" />} value="6M DZD" label="R&D Budget" />
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default AboutUs;