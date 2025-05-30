import { Button } from "../ui/button"


function CallToAction2() {
  return (
   <>
     {/* CTA Section */}
      {/* <section className="px-4 py-16 bg-gradient-to-r from-cyan-400 to-cyan-500">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Advance Your Career?</h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their business communication skills with our AI-powered
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black hover:bg-black/90 text-white font-semibold px-8 py-3">Get Started</Button>
            <Button variant="outline" className="border-black text-black hover:bg-black/10 font-semibold px-8 py-3">
              Request Demo
            </Button>
          </div>
        </div>
      </section> */}
         <section className="py-16 flex flex-col items-center justify-center bg-cyan-500 ">
        <div className="relative z-10 text-center  space-y-8">
          <h2 className="text-4xl md:text-4xl font-bold text-white">
            Ready to Advance Your Career?
          </h2>
          <p className="text-lg md:text-lg text-white  leading-relaxed">
           Join thousands of professionals who have transformed their business communication <br className="lg:block hidden"/> skills with our AI-powered
            platform.
          </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-black hover:bg-black text-white hover:border-black font-semibold px-8 py-5">Get Started</Button>
            <Button variant="outline" className="border-black bg-transparent hover:border-white text-white hover:bg-transparent font-semibold px-8 py-5">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
   </>
  )
}

export default CallToAction2