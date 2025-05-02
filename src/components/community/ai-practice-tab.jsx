import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardFooter, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { aiPracticeTools, aiFeatures } from "@/data/mock-data-community";
import {
  TrendingUp,
  Clock,
  ChevronRight,
  MessageSquare,
  Mic,
  PenTool,
  Bot,
  Laptop,
  Brain,
  Zap,
} from "lucide-react";

export const AIPracticeTab = () => {
  return (
    <div className="grid grid-cols-1 gap-8 text-white lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Aurora AI Practice Tools</h2>
          <Button
            variant="link"
            className="text-light-blue-1 hover:border-transparent"
          >
            View all <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {aiPracticeTools.map((tool) => (
            <Card
              key={tool.id}
              className="flex flex-col text-white transition-shadow hover:shadow-md bg-dark-blue-5 border-neutral-4"
            >
              <CardHeader className="pb-2">
                <div className="flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-2 rounded-full">
                      {tool.icon === "Bot" && <Bot className="h-6 w-6 text-blue-500" />}
                      {tool.icon === "Mic" && <Mic className="h-6 w-6 text-purple-500" />}
                      {tool.icon === "PenTool" && <PenTool className="h-6 w-6 text-green-500" />}
                      {tool.icon === "Laptop" && <Laptop className="h-6 w-6 text-amber-500" />}
                    </div>
                    <div className="flex flex-col gap-1">
                      <CardTitle>{tool.name}</CardTitle>
                      <Badge
                        variant="outline"
                        className="p-2 py-0.5 border-none rounded pointer-events-none w-fit text-neutral-2/80 bg-neutral-4"
                      >
                        {tool.level}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-black">
                    {tool.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="py-2">
                <p className="text-muted-foreground mb-3">{tool.description}</p>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {tool.popularity}% popularity
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {tool.lastUsed}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button className="w-full bg-[#3b82f6] text-white hover:bg-blue-600">
                  Start Practice
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Button className="w-full bg-[#3b82f6] text-white hover:bg-blue-600">
            Explore More Tools
          </Button>
        </div>
      </div>

      <div>
        <Card className="text-white bg-dark-blue-5 border-neutral-4">
          <CardHeader>
            <CardTitle>Aurora AI Capabilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span
                  className={`flex items-center justify-center rounded-lg bg-[#114d60] size-10 aspect-square ${
                    feature.icon === "Mic"
                      ? "bg-[#164253]"
                      : feature.icon === "Brain"
                      ? "bg-[#312e59]"
                      : feature.icon === "Sparkles"
                      ? "bg-[#194143]"
                      : feature.icon === "Zap"
                      ? "bg-[#473c2a]"
                      : ""
                  }`}
                >
                  {/* Dynamically render the icon based on the feature.icon string */}
                  {feature.icon === "Mic" && (
                    <Mic className="size-5 text-light-blue-1" />
                  )}
                  {feature.icon === "Brain" && (
                    <Brain className="text-purple-600 size-5" />
                  )}
                  {feature.icon === "Sparkles" && (
                    <FileText className="text-[#12a979] size-5" />
                  )}
                  {feature.icon === "Zap" && (
                    <Zap className="size-5 text-amber-600" />
                  )}
                </span>
                <div>
                  <h4 className="font-medium text-white">{feature.name}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button variant="clear" className="w-full border-none">
              View All Capabilities
            </Button>
          </CardFooter>
        </Card>

        <Card className="mt-6 text-white bg-dark-blue-5 border-neutral-4">
          <CardHeader>
            <CardTitle>Your Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className={
                    "flex items-center justify-center rounded-lg bg-light-blue-4 size-10 aspect-square"
                  }
                >
                  <MessageSquare className="size-4 text-light-blue-1" />
                </span>
                <div>
                  <h4 className="font-medium text-white">Travel conversation</h4>
                  <p className="text-xs text-muted-foreground">2 hours ago • 15 minutes</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={
                    "flex items-center justify-center rounded-lg bg-[#312e59] size-10 aspect-square"
                  }
                >
                  <Mic className="text-purple-600 size-4" />
                </span>
                <div>
                  <h4 className="font-medium text-white">Pronunciation practice</h4>
                  <p className="text-xs text-muted-foreground">Yesterday • 10 minutes</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={
                    "flex items-center justify-center rounded-lg bg-[#194143] size-10 aspect-square"
                  }
                >
                  <PenTool className="text-sm text-[#10ae7b] size-4" />
                </span>
                <div>
                  <h4 className="font-medium text-white">Writing correction</h4>
                  <p className="text-xs text-muted-foreground">2 days ago • 20 minutes</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};