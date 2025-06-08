"use client";
import { useState, useRef, FormEvent, ChangeEvent } from "react";
import Location from "@/components/sub/location";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    setLoading(true);

    const now = new Date();
    const formattedTime = now.toLocaleString();

    emailjs
      .send(
        "service_ae8wayl",
        "template_tuc68ra",
        {
          from_name: form.name,
          to_name: "DHCP Dz",
          from_email: form.email,
          to_email: "lo_attia@esi.dz",
          subject: form.subject,
          message: form.message,
          time: formattedTime,
        },
        "T-IDc2qHa_dFqmPJK"
      )
      .then(() => {
        setLoading(false);
        setConfirmation("Thank you! We will get back to you as soon as possible.");
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 min-h-[600px]">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[400px]">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send Us a Message</h3>

            {confirmation && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                {confirmation}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  {nameError && <p className="text-red-500 text-xs mt-1">{nameError}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Your email" 
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Subject" 
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message" 
                  rows={5} 
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-300 flex flex-col justify-between min-h-full">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact Information</h3>
            <div className="space-y-6 flex-grow flex flex-col justify-between">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Office Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">ESI, Oued Smar, Alger, Algeria</p>
                </div>
              </div>
              <Location />
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">contact@yourcompany.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4 flex-shrink-0">
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
  );
};

export default Contact;
