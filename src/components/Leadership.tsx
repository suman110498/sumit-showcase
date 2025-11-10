import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Leadership & Engagement
        </h2>
        <Card className="p-8 shadow-card hover:shadow-hover transition-all">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="p-4 bg-secondary rounded-lg">
              <Users className="h-8 w-8 text-secondary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                Discipline Coordinator - Leadership Summit
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Demonstrated exceptional organizational and leadership abilities by coordinating discipline activities, 
                managing team dynamics, and ensuring seamless execution of summit events. Recognized for fostering 
                collaboration, maintaining high standards, and contributing to the professional development of participants.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Leadership;
