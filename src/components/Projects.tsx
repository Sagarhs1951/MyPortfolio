import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import projectBedwise from "@/assets/project-bedwise.jpg";
import projectFoodDelivery from "@/assets/project-food-delivery.jpg";

const Projects = () => {
  const projects = [
    {
      title: "BedWise Connect",
      subtitle: "Patient Bed Slot Reservation System",
      description:
        "Developed a hospital bed reservation system using Java, JDBC for backend, MySQL for database handling 500+ records, and HTML, CSS, Bootstrap for frontend. Implemented three user roles and database triggers for bed booking and occupancy tracking.",
      image: projectBedwise,
      period: "April 2024 - Dec 2024",
      tags: ["Java", "JDBC", "MySQL", "Bootstrap"],
    },
    {
      title: "Food Delivery Web Application",
      subtitle: "Full-Stack Food Ordering Platform",
      description:
        "Developed a full-stack food delivery web application using Java, Hibernate, JSP, and MySQL. Implemented secure features like user login, session handling, and search for better usability. Designed and optimized MySQL database schemas.",
      image: projectFoodDelivery,
      period: "Feb 2025 - Aug 2025",
      tags: ["Java", "Hibernate", "JSP", "MySQL"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span> / Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the academic works done by me on various projects in AI/ML and 
            Blockchain Mining
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                    Featured
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar size={16} />
                  <span>{project.period}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-primary font-semibold mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="w-full">
                  View Details <ExternalLink size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
