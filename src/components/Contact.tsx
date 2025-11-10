import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Palette } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Get In Touch
        </h2>
        <Card className="p-8 shadow-card">
          <div className="text-center space-y-8">
            <p className="text-xl text-muted-foreground">
              I'm always interested in hearing about new opportunities and collaborations.
              Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary shadow-hover"
                onClick={() => window.location.href = 'mailto:sks.110498@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                sks.110498@gmail.com
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://www.linkedin.com/in/sumit-suman-7b6b4b150', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://www.behance.net/gallery/238296151/Portfolio', '_blank')}
              >
                <Palette className="mr-2 h-5 w-5" />
                Behance
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
