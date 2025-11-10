import { Card } from "@/components/ui/card";
import { Code, Database, FileSpreadsheet, BarChart3 } from "lucide-react";

const skills = [
  {
    name: "Python",
    icon: Code,
    description: "Proficient in developing applications, automation scripts, and data analysis tools using Python's extensive libraries and frameworks.",
  },
  {
    name: "SQL",
    icon: Database,
    description: "Expert in database design, complex queries, data manipulation, and optimization for efficient data retrieval and management.",
  },
  {
    name: "Excel",
    icon: FileSpreadsheet,
    description: "Advanced capabilities in data analysis, visualization, pivot tables, macros, and financial modeling for business intelligence.",
  },
  {
    name: "Power BI",
    icon: BarChart3,
    description: "Creating interactive dashboards, visual analytics, and data-driven insights to support strategic decision-making processes.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-hover transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-primary rounded-lg">
                  <skill.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
