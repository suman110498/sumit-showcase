import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Sumit Kumar Suman
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer & Cybersecurity Enthusiast
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about leveraging technology to solve complex problems and drive innovation in IT and cybersecurity domains.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary shadow-hover"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float"></div>
              <img 
                src={profileImage} 
                alt="Sumit Kumar Suman" 
                className="relative rounded-full w-80 h-80 object-cover shadow-hover border-4 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
