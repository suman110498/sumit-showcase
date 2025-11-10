import { Card } from "@/components/ui/card";
import { Folder } from "lucide-react";

const projects = [
  {
    name: "Stegasis",
    description: "Innovative steganography application enabling secure data hiding within digital media files using advanced encryption algorithms.",
  },
  {
    name: "Smart Cane",
    description: "IoT-enabled assistive device integrating sensors and navigation technology to enhance mobility for visually impaired individuals.",
  },
  {
    name: "Attendance Simulator",
    description: "Automated attendance tracking system utilizing facial recognition and real-time data processing to streamline administrative workflows.",
  },
  {
    name: "Event Management System",
    description: "Comprehensive platform for organizing, scheduling, and managing events with integrated registration, communication, and analytics features.",
  },
  {
    name: "Library Management System",
    description: "Full-stack application for cataloging, circulation, and inventory management with user-friendly interface and robust database architecture.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Key Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-hover transition-all hover:-translate-y-1"
            >
              <div className="flex gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg h-fit">
                  <Folder className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.name}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
