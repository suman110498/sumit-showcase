import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const certifications = [
  {
    name: "Power BI",
    status: "In Progress",
    description: "Advancing expertise in business intelligence and data visualization best practices.",
  },
  {
    name: "Ethical Hacking",
    status: "Certified",
    description: "Comprehensive training in penetration testing, vulnerability assessment, and security protocols.",
  },
  {
    name: "Cyber Security Basics",
    status: "Certified",
    description: "Fundamental understanding of security principles, threat landscapes, and defense strategies.",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Professional Certifications
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-hover transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{cert.name}</h3>
                  <Badge 
                    variant={cert.status === "Certified" ? "default" : "secondary"}
                    className="mb-3"
                  >
                    {cert.status}
                  </Badge>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
