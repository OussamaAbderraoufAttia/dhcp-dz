"use client";
import Image from "next/image";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  cv: string;
}

export function TeamMember({ name, role, image, linkedin, cv }: TeamMemberProps) {
  return (
    <div className="bg-white dark:bg-[#1f2937] rounded-lg shadow-md overflow-hidden text-center group">
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={name} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
            {/* LinkedIn */}
            <Link
              href={linkedin}
              className="bg-white dark:bg-gray-800 p-2 rounded-full text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>

            {/* CV Link */}
            <Link
              href={cv}
              className="bg-white dark:bg-gray-800 p-2 rounded-full text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 2H6a2 2 0 00-2 2v16c0 1.103.897 2 2 2h12a2 2 0 002-2V8l-6-6zm1 7V3.5L20.5 9H15zM8 15h8v2H8v-2zm0-4h8v2H8v-2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-blue-600 dark:text-blue-400">{role}</p>
      </div>
    </div>
  );
}
