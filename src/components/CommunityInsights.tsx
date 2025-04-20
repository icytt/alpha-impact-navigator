"use client"

import Image from "next/image";

export function CommunityInsights() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4">
          Community & Expert Insights
        </h2>
        <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto">
          Join a community of like-minded investors and get insights from industry experts.
        </p>

        {/* Investor Testimonials */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            Investor Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <TestimonialCard
              quote="GreenAlpha has transformed how I approach investing. I can see the real-world impact my money is making while still getting solid returns."
              author={{
                name: "Sarah Johnson",
                title: "Investor since 2021",
                initials: "SJ",
                photo: "/images/sarah.jpg",
              }}
            />
            <TestimonialCard
              quote="The transparency and detailed impact metrics are what set GreenAlpha apart. I know exactly how my investments are helping the planet."
              author={{
                name: "Michael Chen",
                title: "Environmental Consultant",
                initials: "MC",
                photo: "/images/michael.jpg",
              }}
            />
            <TestimonialCard
              quote="As someone new to investing, I appreciate how GreenAlpha makes sustainable investing accessible and easy to understand."
              author={{
                name: "Taylor Rodriguez",
                title: "First-time Investor",
                initials: "TR",
                photo: "/images/taylor.jpg",
              }}
            />
          </div>
        </div>

        {/* Expert Insights */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Expert Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ExpertQuote
              quote="The next decade of investing will be defined by how well we address climate change and social inequality."
              author={{
                name: "Dr. Maya Patel",
                title: "Sustainability Director",
                photo: "/images/maya.jpg",
              }}
            />
            <ExpertQuote
              quote="Sustainable investments have consistently shown resilience during market downturns while delivering competitive returns."
              author={{
                name: "James Wilson",
                title: "Financial Analyst",
                photo: "/images/james.jpg", 
              }}
            />
          </div>
          <div className="text-center mt-16">
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[#4CAF50] hover:bg-[#4CAF50] hover:text-white text-[#4CAF50] px-8 py-4 font-medium transition-colors"
            >
              Read Our Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  quote,
  author,
}: {
  quote: string
  author: {
    name: string
    title: string
    initials: string
    photo?: string
  }
}) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-lg flex flex-col h-full">
      <div className="text-2xl text-[#4CAF50] mb-2 font-serif leading-none">“</div>
      <p className="text-gray-800 text-lg leading-snug mb-6 flex-1">{quote}</p>
      <div className="flex items-center gap-4 mt-auto">
        {author.photo ? (
          <Image
            src={author.photo}
            alt={author.name}
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#4CAF50] text-white flex items-center justify-center text-base font-medium">
            {author.initials}
          </div>
        )}
        <div>
          <div className="text-base font-semibold text-black">{author.name}</div>
          <div className="text-gray-600 text-sm">{author.title}</div>
        </div>
      </div>
    </div>
  )
}

function ExpertQuote({
  quote,
  author,
}: {
  quote: string
  author: {
    name: string
    title: string
    photo?: string
  }
}) {
  return (
    <div className="bg-green-50 rounded-2xl p-7 flex flex-col h-full">
      <div className="text-2xl text-[#4CAF50] mb-2 font-serif leading-none">“</div>
      <p className="text-gray-800 text-lg leading-snug italic mb-6 flex-1">{quote}</p>
      <div className="flex items-center gap-4 mt-auto">
        {author.photo ? (
          <Image
            src={author.photo}
            alt={author.name}
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
        ) : null}
        <div>
          <div className="text-base font-semibold text-black">{author.name}</div>
          <div className="text-gray-600 text-sm">{author.title}</div>
        </div>
      </div>
    </div>
  )
} 