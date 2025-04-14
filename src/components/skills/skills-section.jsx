import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen,MessageCircle, CirclePlay, Bookmark  } from "lucide-react";

const skills = [
  {
    title: "Reading",
    description: "Improve your reading skills with interactive texts",
    icon: <BookOpen className="w-10 h-10 text-cyan-500" />,
  },
  {
    title: "Speaking",
    description: "Practice conversations with our AI assistant.",
    icon: <MessageCircle  className="w-10 h-10 text-cyan-500" />,
  },
  {
    title: "Listening",
    description: "Enhance your listening skills with audio lessons.",
    icon: <CirclePlay className="w-10 h-10 text-cyan-500" />,
  },
  {
    title: "Writing",
    description: "Get feedback on your writing from our AI.",
    icon: <Bookmark className="w-10 h-10 text-cyan-500" />,
  },
];

const SkillsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-bold text-center">Improve Your Language <br /> <span>Skills</span></h2>
        <p className="text-center mb-12">Practice your English language skillls with our AI powered platform</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title} className="hover:shadow-lg text-center transition-shadow">
              <CardHeader className="flex items-center gap-4">
                {skill.icon}
              </CardHeader>
              <CardTitle className="text-1xl font-bold">{skill.title}</CardTitle>
              <CardContent>
                <p className="text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;