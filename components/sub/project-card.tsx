"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectTestimonial {
  quote: string;
  author: string;
  title?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  popupTitle: string;
  year: number;
  popupLogo: string;
  fullDescription: string;
  testimonials?: ProjectTestimonial[];
}

export function ProjectCard({
  title,
  description,
  image,
  popupTitle,
  year,
  popupLogo,
  fullDescription,
  testimonials,
}: ProjectCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-[#1f2937] rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow max-w-[90%] sm:max-w-xs mx-auto">
      <div className="flex items-center justify-center">
        <div className="relative w-52 h-52 sm:w-64 sm:h-64">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="p-3 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {description}
        </p>

        <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="group-hover:bg-blue-50 dark:group-hover:bg-[#2a0e61]/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[90vw] sm:max-w-[600px] max-h-[80vh] overflow-y-auto rounded-xl dark:bg-[#1e1e1e] dark:text-gray-200">
            <div className="px-5 py-4 sm:px-6 sm:py-6">
              <DialogHeader>
                <DialogTitle className="dark:text-white">
                  {popupTitle}
                </DialogTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Year: {year}
                </p>
              </DialogHeader>

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
                  <Image
                    src={popupLogo}
                    alt={`${popupTitle} Logo`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <DialogDescription className="text-gray-700 dark:text-gray-300 text-center sm:text-left">
                  {fullDescription}
                </DialogDescription>
              </div>

              {testimonials && testimonials.length > 0 && (
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    Testimonials
                  </h4>
                  <div className="flex flex-col space-y-6">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 dark:bg-[#2a2a2a] rounded-lg p-4 text-center sm:text-left"
                      >
                        <p className="text-sm text-gray-700 dark:text-gray-300 italic mb-2">
                          "{testimonial.quote}"
                        </p>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          {testimonial.author}
                        </div>
                        {testimonial.title && (
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {testimonial.title}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
