
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { InvestmentCard } from "@/components/InvestmentCard";
import { DashboardPreview } from "@/components/DashboardPreview";
import { Testimonial } from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const investmentOpportunities = [
  {
    title: "Green Energy Fund",
    sector: "Renewable Energy",
    range: "$10k - $50k",
    description: "Invest in a portfolio of wind, solar, and hydro projects with established track records of consistent returns.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=60",
    tags: ["Solar", "Wind", "Hydro", "ESG Rating: A+"]
  },
  {
    title: "Sustainable Agriculture",
    sector: "Food & Agriculture",
    range: "$5k - $25k",
    description: "Support regenerative farming practices that improve soil health while producing nutritious organic food.",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&q=60",
    tags: ["Organic", "Carbon Capture", "Water Conservation", "ESG Rating: A"]
  },
  {
    title: "Clean Water Initiative",
    sector: "Water Technology",
    range: "$15k - $45k",
    description: "Fund innovative water purification technologies bringing clean water to underserved communities worldwide.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    tags: ["Clean Tech", "Social Impact", "Innovation", "ESG Rating: A-"]
  }
];

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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Investment Opportunities Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Investment Opportunities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover transparent and curated opportunities that make a difference while providing competitive returns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investmentOpportunities.map((opportunity, index) => (
                <InvestmentCard
                  key={index}
                  title={opportunity.title}
                  sector={opportunity.sector}
                  range={opportunity.range}
                  description={opportunity.description}
                  image={opportunity.image}
                  tags={opportunity.tags}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-leaf hover:bg-leaf-dark text-white">
                View All Opportunities
              </Button>
            </div>
          </div>
        </section>
        
        {/* Impact Dashboard Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Track Your Impact</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real-time tracking helps you see the tangible environmental and social results of your investments.
              </p>
            </div>
            
            <DashboardPreview />
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-ocean hover:bg-ocean-dark text-white">
                Explore the Dashboard
              </Button>
            </div>
          </div>
        </section>
        
        {/* Community & Expert Insights */}
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
                    content={testimonial.content}
                    author={testimonial.author}
                    role={testimonial.role}
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
        
        {/* User Flow CTA */}
        <section className="py-20 bg-gradient-to-br from-leaf/90 to-ocean/90 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Seamlessly integrate your financial goals with your desire to create positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-leaf hover:bg-gray-100 text-lg px-8">
                Sign Up
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
