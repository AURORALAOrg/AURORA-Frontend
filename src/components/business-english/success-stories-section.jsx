import { Card, CardContent } from "../ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director, Global Tech",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "The industry-specific vocabulary and real-world scenarios helped me communicate more effectively with international clients. My confidence in business meetings has improved dramatically.",
  },
  {
    name: "Miguel Rodriguez",
    role: "Finance Manager, Banking Sector",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "The financial English course was exactly what I needed to advance in my career. The AI-powered feedback on my speaking helped me sound more professional and authoritative.",
  },
  {
    name: "Akira Tanaka",
    role: "Project Manager, Manufacturing",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "The cross-cultural communication module was eye-opening. I now navigate international business relationships with much greater ease and understanding.",
  },
];
function SuccessStoriesSection() {
  return (
    <>
      {/* Success Stories Section */}
      <section className="px-4 py-16 bg-[#1F2937]">
        <div className="">
          <h2 className="text-4xl md:text-4xl text-center font-bold text-white mb-12">
            Success Stories
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 lg:px-60">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[#111827] border-none">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-white text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-semibold text-slate-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-slate-300 italic leading-relaxed text-lg ">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SuccessStoriesSection;
