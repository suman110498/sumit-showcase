import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const education = [
  {
    degree: "MBA",
    institution: "Lovely Professional University, Jalandhar",
    description: "Advanced business strategy, leadership, and management principles to complement technical expertise.",
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University, Jalandhar",
    description: "Comprehensive foundation in software development, algorithms, data structures, and emerging technologies.",
  },
  {
    degree: "Intermediate Education",
    institution: "Bhavans Sri Aurobindo Jr College, Secunderabad",
    description: "Strong academic preparation in science and mathematics disciplines.",
  },
  {
    degree: "Matriculation",
    institution: "Delhi Public School, Bhagalpur",
    description: "Foundational education with emphasis on analytical and critical thinking skills.",
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="education" 
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-hover transition-all"
            >
              <div className="flex gap-4">
                <div className="p-3 bg-secondary rounded-lg h-fit">
                  <GraduationCap className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{item.degree}</h3>
                  <p className="text-primary font-medium mb-2">{item.institution}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
