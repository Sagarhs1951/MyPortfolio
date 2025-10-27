import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <p className="text-muted-foreground mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              SAGAR H S
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6">
              Computer Science <span className="gradient-text">Student</span> &{" "}
              <span className="gradient-text">Full-Stack Developer</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Motivated and skilled Computer Science student with expertise in Java development,
              web technologies, and problem-solving. Committed to delivering exceptional results
              with strong work ethic and a collaborative mindset.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View Projects
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/Sagarhs1951"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sagarhs2003"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sagarsagar0559@gmail.com"
                className="p-2 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+918792750150"
                className="p-2 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg opacity-20 blur-3xl rounded-full"></div>
              <img
                src={heroImage}
                alt="Sagar H S - Computer Science Student"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
