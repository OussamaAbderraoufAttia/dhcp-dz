"use client";
// team.tsx
import React from 'react';
import { TeamMember } from '../sub/team-member';


const Team= () =>{

    return(
        <div>
            <section id="team" className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
                  <p className="max-w-3xl mx-auto text-lg text-gray-600">
                    Meet the talented professionals behind our innovative solutions.
                  </p>
                </div>
            
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <TeamMember
                    name="Oussama Abderraouf ATTIA"
                    role="Project Manager"
                    image="/person.png"
                    linkedin="https://linkedin.com"
                    cv="/cv.pdf"
                  />
                  <TeamMember 
                    name="Amira BEN ATMANE" 
                    role="Quality Tester" 
                    image="/person.png" 
                    linkedin="https://linkedin.com"
                    cv="/cv.pdf"
                  />
                  <TeamMember 
                    name="Maria BELHADJ" 
                    role="Marketing Manager" 
                    image="/person.png" 
                    linkedin="https://linkedin.com"
                    cv="/cv.pdf"
                  />
                  <TeamMember 
                    name="Ali MAHDI" 
                    role="Software Engineer" 
                    image="/person.png" 
                    linkedin="https://linkedin.com"
                    cv="/cv.pdf"
                  />
                  <TeamMember
                    name="Boutaina DOULATE SEROURI"
                    role="Finance Manager"
                    image="/person.png"
                    linkedin="https://linkedin.com"
                    cv="/cv.pdf"
                  />
                  <TeamMember 
                    name="Malek BOUKABOUS" 
                    role="UI/UX Designer" 
                    image="person.png" 
                    linkedin="https://linkedin.com"
                    cv="/cv.pdf"
                  />
                  <TeamMember 
                    name="Yasmine HAOUAS" 
                    role="Systems Manager" 
                    image="/person.png" 
                    linkedin="https://linkedin.com"
                    cv="/cv.pdf"
                  />
                  <TeamMember 
                    name="Ishaq Belhadj MAHDI" 
                    role="AI Specialist" 
                    image="/person.png" 
                    linkedin="https://linkedin.com"
                    cv="/cv.pdf"
                  />
                </div>
              </div>
            </section>
        </div>
    )
}

export default Team;