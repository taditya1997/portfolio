"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { Briefcase } from 'lucide-react';

const workExperience = [
  {
    company: "Scrut Automation",
    duration: "March 2024 — August 2024",
    logo: "/scrut_automation_logo.jpeg"
  },
  {
    company: "Frigga Cloud Labs",
    duration: "May 2023 - March 2024",
    logo: "/frigga_logo.png"
  },
  {
    company: "Atmecs Technologies Pvt Ltd",
    duration: "June 2021 — April 2023",
    logo: "/atmecs.jpeg"
  }
];

export function ExperienceComponent() {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/aditya_thakur_resume.pdf';
    link.download = 'Aditya_Thakur_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="p-4 sm:p-6 bg-[#1E1E1E] rounded-lg border-cardBorder">
      <CardHeader className="flex flex-row items-center px-0 space-x-2 space-y-0 ">
        <Briefcase className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
        <CardTitle className="text-16 m-0 font-semibold">Work Experience</CardTitle>
      </CardHeader>
    
      <CardContent className="space-y-4 mt-4 w-full px-0">
        {workExperience.map((work, index) => (
          <WorkItem
            key={index}
            company={work.company}
            duration={work.duration}
            logo={work.logo}
          />
        ))}
      </CardContent>
  
      <CardFooter className="mt-4 px-0">
        <Button 
          onClick={handleDownload}
          variant="default" 
          className="w-full text-sm bg-green hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Download CV <ArrowDownIcon className="ml-2 h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function WorkItem({ company, duration, logo }) {
  return (
    <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between w-full p-2 rounded">
      <div className="flex items-center space-x-2 mb-1 xs:mb-0">
        {logo && (
          <img 
            src={logo} 
            alt={`${company} logo`}
            className="w-8 h-8 object-contain"
          />
        )}
        <div>
          <p className="text-14 font-semibold">{company}</p>
          <p className="text-12 text-textZinc">{duration}</p>
        </div>
      </div>
    </div>
  );
}