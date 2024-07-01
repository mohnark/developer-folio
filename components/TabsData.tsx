"use client";

import React from "react";
import { Tabs } from "@/components/ui/tabs";
import { aboutText, experience, projects, posts } from "@/data/contentConfig";

export function TabsData() {
  const tabs = [
    {
      title: "About",
      value: "about",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-md md:text-1xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          <p className="leading-relaxed">
            {aboutText}
          </p>
        </div>
      ),
    },
    {
      title: "Experience",
      value: "experience",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-md md:text-1xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index}>
                <h3 className="text-lg font-regular text-white">{exp.date}</h3>
                <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                <ul className="list-none mt-2 space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Projects",
      value: "projects",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-lg md:text-2xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          <p className="leading-relaxed">
            {projects}
          </p>
        </div>
      ),
    },
    {
      title: "Posts",
      value: "posts",
      content: (
        <div className="w-full h-full rounded-2xl p-10 text-lg md:text-2xl text-gray-300 bg-transparent transition-all duration-300 hover:bg-[#122B39] hover:text-[#2eb0cb]">
          <p className="leading-relaxed">
            {posts}
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
      <Tabs tabs={tabs} />
    </div>
  );
}
