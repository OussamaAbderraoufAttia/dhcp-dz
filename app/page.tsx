"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTheme } from "@/components/utils/theme-provider";

import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Sun,
  Moon,
} from "lucide-react";

import Link from "next/link";

import AboutUs from "@/components/sections/aboutus";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team";
import { ClientLogo } from "@/components/sub/client-logo";
import { NavBar } from "@/components/sub/nav-bar";
import { Footer } from "@/components/sub/footer";

export default function Home() {
  // Local dark mode state synced with <html> class and localStorage
  const [isDark, setIsDark] = useState(false);

  // On mount, read localStorage and update state and <html> class
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // Toggle dark mode handler
  const toggleDarkMode = () => {
    const newMode = !isDark;
    document.documentElement.classList.toggle("dark");
    window.dispatchEvent(new Event("dark-mode-change"));
    setIsDark(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", newMode.toString());
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navbar */}
      <NavBar />

      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-300"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
<section className="relative bg-gradient-to-r from-[#289dd2] to-blue-800 text-white py-20 md:py-32 overflow-hidden">
  <div
    className="absolute inset-0 opacity-10 bg-cover bg-center"
    style={{ backgroundImage: "url('/landing-image.png')" }}
  ></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
        Pioneering Digital Solutions for Educational Excellence
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-blue-100">
        Transforming university services through innovative technology
      </p>
      <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-lg px-8 py-6">
        Discover Our Solutions
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  </div>
</section>

      {/* About Us */}
      <AboutUs />

      {/* Services */}
      <Services />

      {/* Projects */}
      <Projects />

      {/* Team */}
      <Team />

      {/* Clients */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Clients & Partners
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Trusted by leading educational institutions across Algeria.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            <ClientLogo image="/wizara.png" />
            <ClientLogo image="/wizara2.png" />
            <ClientLogo image="/wizara3.png" />
            <ClientLogo image="/djezzy.png" />
            <ClientLogo image="/hiss.png" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Get in touch with our team to discuss how we can help your institution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Office Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">ESI, Oued Smar, Alger, Algeria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">contact@yourcompany.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+213 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
