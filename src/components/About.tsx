import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Career Objective
        </h2>
        <Card className="p-8 shadow-card hover:shadow-hover transition-shadow">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            A highly disciplined, dedicated, and hardworking professional with an optimistic approach toward challenges and continuous learning. 
            Passionate about leveraging data analytics and business intelligence to drive strategic decision-making and organizational growth.
            <br /><br />
            Seeking opportunities to contribute analytical expertise, problem-solving skills, and collaborative spirit to organizations 
            committed to data-driven transformation and business excellence.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
