import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bookmark,
  BookOpen,
  Brain,
  Globe,
  GraduationCap,
  MessageCircle,
  Users,
} from "lucide-react";

function CoursesSection() {
  return (
    <>
      <section
        aria-labelledby="courses-heading"
        className="w-full   bg-primary-ebony py-32 px-24 flex flex-col gap-8"
      >
        <article className="text-white text-center">
          <h1 className="font-bold text-5xl">Explore Our Courses</h1>
          <p className="font-normal text-xl text-secondary-lightgray">
            Find the perfect course to match your learning goals
          </p>
        </article>
        <main>
          <Tabs
            orientaion="vertical"
            defaultValue="beginner"
            className="flex flex-col gap-8 items-center w-full"
          >
            <TabsList
              aria-label="Course Levels"
              className="grid grid-cols-4 gap-1 w-[379px] bg-[#374151] rounded-lg p-1"
            >
              <TabsTrigger value="beginner" aria-controls="beginner-tab">
                Beginner
              </TabsTrigger>
              <TabsTrigger
                value="intermediate"
                aria-controls="intermediate-tab"
              >
                Intermediate
              </TabsTrigger>
              <TabsTrigger value="advanced" aria-controls="advanced-tab">
                Advanced
              </TabsTrigger>
              <TabsTrigger value="business" aria-controls="business-tab">
                Business
              </TabsTrigger>
            </TabsList>

            {/* Beginner Courses */}
            <TabsContent
              id="beginner-tab"
              aria-labelledby="beginner-tab"
              role="tabpanel"
              value="beginner"
              className="mt-6 w-full"
            >
              <h3 className="sr-only">Beginner Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <Brain
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Basic Conversation
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Learn everyday phrases and expressions
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Basic Conversation"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start <br />
                      Learning
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <GraduationCap
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Grammar Foundations
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Master the basics of English grammar
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Grammar Foundations"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start <br />
                      Learning
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <Globe
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Cultural Insights
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Learn about cultures while learning language
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Cultural Insights"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start <br />
                      Learning
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Intermediate Courses */}
            <TabsContent
              id="intermediate-tab"
              value="intermediate"
              className="mt-6 w-full"
              role="tabpanel"
              aria-labelledby="intermediate-tab"
            >
              <h3 className="sr-only">Intermediate Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <MessageCircle
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Fluent Conversations
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Improve your speaking fluency
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Fluent Conversations"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start Learning
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <BookOpen
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Reading Comprehension
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Enhance your reading skills
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Reading Comprehension"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start Learning
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <Bookmark
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Writing Workshop
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Develop your writing skills
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Writing Workshop"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start Learning
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Advanced Courses */}
            <TabsContent
              id="advanced-tab"
              value="advanced"
              className="mt-6 w-full"
              role="tabpanel"
              aria-labelledby="advanced-tab"
            >
              <h3 className="sr-only">Advanced Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <Brain
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Advanced Grammar
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Master complex grammatical structures
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Advanced Grammar"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start Learning
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <Globe
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Idiomatic Expressions
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Learn native-like expressions
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Idiomatic Expressions"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start Learning
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <GraduationCap
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Academic English
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Prepare for academic environments
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Academic English"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start Learning
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Business Courses */}
            <TabsContent
              id="business-tab"
              value="business"
              className="mt-6 w-full"
              role="tabpanel"
              aria-labelledby="business-tab"
            >
              <h3 className="sr-only">Business Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <Users
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Business Communication
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Professional email and meeting skills
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Business Communication"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start Learning
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <MessageCircle
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Negotiation Skills
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Learn to negotiate effectively
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Negotiation Skills"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start Learning
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-lg overflow-hidden">
                  <CardHeader className="w-[434px]">
                    <div className="flex gap-4">
                      <BookOpen
                        aria-hidden="true"
                        className="text-[#00B8D4] size-8"
                      />
                      <div className="w-fit">
                        <CardTitle className="font-bold text-base">
                          Presentation Mastery
                        </CardTitle>
                        <CardDescription className="font-normal text-sm">
                          Deliver impactful presentations
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardFooter>
                    <Button
                      aria-label="Start learning Presentation Mastery"
                      className="bg-[#00B8D4] hover:bg-[#00B8D4]/90 py-5 text-white w-full"
                    >
                      Start Learning
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </section>
    </>
  );
}

export default CoursesSection;
