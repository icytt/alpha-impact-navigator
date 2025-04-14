
import { Button } from "@/components/ui/button";
import { InvestmentCard } from "@/components/InvestmentCard";

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

export function FeaturedInvestments() {
  return (
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
              {...opportunity}
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
  );
}
