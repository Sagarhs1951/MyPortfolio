import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, MessageSquare, Users, Target } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Java & Spring Boot", level: 90, icon: Code },
    { name: "JavaScript & React", level: 85, icon: Globe },
    { name: "SQL & Database", level: 85, icon: Database },
    { name: "HTML & CSS", level: 90, icon: Globe },
    { name: "Python Basics", level: 70, icon: Code },
    { name: "JDBC & Hibernate", level: 85, icon: Database },
  ];

  const softSkills = [
    { name: "Communication", level: 90, icon: MessageSquare },
    { name: "Problem-solving", level: 95, icon: Target },
    { name: "Teamwork", level: 90, icon: Users },
    { name: "Time management", level: 85, icon: Target },
    { name: "Adaptability", level: 88, icon: MessageSquare },
    { name: "Attention to detail", level: 92, icon: Target },
  ];

  const certifications = [
    {
      title: "Python Basic Certification",
      issuer: "HackerRank",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Java Certification",
      issuer: "HackerRank",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A snapshot of my <span className="gradient-text">core competencies</span> as well
            as what I have learned
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon size={20} className="text-primary" />
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Soft Skills</h3>
              <div className="space-y-6">
                {softSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon size={20} className="text-primary" />
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div className="mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Certifications</span> & Extra-Curricular
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${cert.color} mb-4`}></div>
                  <h4 className="text-xl font-bold mb-2">{cert.title}</h4>
                  <p className="text-muted-foreground">Issued by {cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
