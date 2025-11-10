import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Career Objective
        </h2>
        <Card className="p-8 shadow-card hover:shadow-hover transition-shadow">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            A highly disciplined, dedicated, and hardworking professional with an optimistic approach toward challenges and continuous learning. 
            Passionate about leveraging technology to solve complex problems and drive innovation in the IT and cybersecurity domains.
            <br /><br />
            Seeking opportunities to contribute technical expertise, analytical thinking, and collaborative spirit to organizations 
            committed to digital transformation and security excellence.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
