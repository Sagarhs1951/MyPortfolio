import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E. in Computer Science",
      institution: "Jawaharlal Nehru New College of Engineering",
      year: "2025",
      score: "CGPA: 8.7",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Pre-University (PCMB)",
      institution: "Adichunchanagiri Pre-University College",
      year: "2021",
      score: "84.3%",
      icon: Award,
      color: "from-purple-500 to-pink-500",
    },
    {
      degree: "SSLC",
      institution: "Murarji Desai Residential School",
      year: "2019",
      score: "84.3%",
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Education</span> & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center mb-4`}>
                  <edu.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground mb-4">{edu.institution}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-primary" />
                    <span>{edu.year}</span>
                  </div>
                  <div className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                    {edu.score}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Section */}
        <Card className="card-hover animate-fade-in border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <GraduationCap className="text-white" size={32} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-2xl font-bold">Java Development Intern</h3>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Calendar size={16} />
                    Feb 2025 - Aug 2025
                  </span>
                </div>
                <p className="text-primary font-semibold mb-4">
                  Kodnest Technologies Private Limited, Bengaluru
                </p>
                <p className="text-muted-foreground">
                  Trained in Core & Advanced Java, Spring, Hibernate, MySQL, and Frontend Development, 
                  applying concepts like OOP, Collections, Multithreading, JDBC, and Servlets in real-world 
                  projects, including a capstone Food Delivery web app showcasing full-stack skills.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
