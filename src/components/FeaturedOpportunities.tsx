"use client"

import Image from 'next/image'
import Link from 'next/link'

const opportunities = [
  {
    id: 1,
    title: "Green Energy Fund",
    category: "Renewable Energy",
    description: "Invest in a portfolio of wind, solar, and hydro projects with established track records of consistent returns.",
    image: "/images/green-energy.jpg",
    investmentRange: "$10k - $50k",
    tags: ["Solar", "Wind", "Hydro"],
    esgRating: "A+",
  },
  {
    id: 2,
    title: "Sustainable Agriculture",
    category: "Food & Agriculture",
    description: "Support regenerative farming practices that improve soil health while producing nutritious organic food.",
    image: "/images/agriculture.jpg",
    investmentRange: "$5k - $25k",
    tags: ["Organic", "Carbon Capture", "Water Conservation"],
    esgRating: "A",
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    category: "Water Technology",
    description: "Fund innovative water purification technologies bringing clean water to underserved communities worldwide.",
    image: "/images/water.jpg",
    investmentRange: "$15k - $45k",
    tags: ["Clean Tech", "Social Impact", "Innovation"],
    esgRating: "A-",
  },
]

export function FeaturedOpportunities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Investment Opportunities
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Discover transparent and curated opportunities that make a difference while providing competitive returns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={opportunity.image}
                  alt={opportunity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                    <p className="text-gray-600 text-sm">{opportunity.category}</p>
                  </div>
                  <span className="bg-leaf text-white text-sm px-3 py-1 rounded-full">
                    {opportunity.investmentRange}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {opportunity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">
                    ESG Rating:{" "}
                    <span className="font-semibold">{opportunity.esgRating}</span>
                  </span>
                  <div className="flex gap-3">
                    <Link
                      href={`/opportunities/${opportunity.id}`}
                      className="text-gray-700 hover:text-leaf"
                    >
                      Learn More
                    </Link>
                    <Link
                      href={`/invest/${opportunity.id}`}
                      className="bg-leaf hover:bg-leaf-dark text-white px-4 py-1 rounded-lg"
                    >
                      Invest Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/opportunities"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 hover:border-leaf text-gray-700 px-6 py-3 font-medium"
          >
            View All Opportunities
          </Link>
        </div>
      </div>
    </section>
  )
} 