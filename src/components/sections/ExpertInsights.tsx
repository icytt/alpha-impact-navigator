
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Testimonial } from "@/components/Testimonial";

const testimonials = [
  {
    content: "GreenAlpha has transformed how I approach investing. I can see the real-world impact my money is making while still getting solid returns.",
    author: "Sarah Johnson",
    role: "Investor since 2021"
  },
  {
    content: "The transparency and detailed impact metrics are what set GreenAlpha apart. I know exactly how my investments are helping the planet.",
    author: "Michael Chen",
    role: "Environmental Consultant"
  },
  {
    content: "As someone new to investing, I appreciate how GreenAlpha makes sustainable investing accessible and easy to understand.",
    author: "Taylor Rodriguez",
    role: "First-time Investor"
  }
];

const experts = [
  {
    name: "Dr. Maya Patel",
    role: "Sustainability Director",
    quote: "The next decade of investing will be defined by how well we address climate change and social inequality."
  },
  {
    name: "James Wilson",
    role: "Financial Analyst",
    quote: "Sustainable investments have consistently shown resilience during market downturns while delivering competitive returns."
  }
];

export function ExpertInsights() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community & Expert Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a community of like-minded investors and get insights from industry experts.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Investor Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
        
        <Separator className="my-16" />
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Expert Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {experts.map((expert, index) => (
              <div key={index} className="bg-green-50 border border-green-100 rounded-lg p-8 relative">
                <svg className="absolute top-4 left-4 h-12 w-12 text-green-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <div className="pl-12">
                  <p className="text-xl text-gray-800 italic mb-6">"{expert.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{expert.name}</p>
                    <p className="text-gray-600">{expert.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="border-leaf text-leaf hover:bg-leaf/10">
              Read Our Blog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
