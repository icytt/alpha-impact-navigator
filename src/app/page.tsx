import Link from 'next/link'
import { FeaturedOpportunities } from '@/components/FeaturedOpportunities'
import { ImpactTracking } from '@/components/ImpactTracking'
import { CommunityInsights } from '@/components/CommunityInsights'
import { CallToAction } from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-xl font-semibold">
            G
          </div>
          <span className="font-semibold text-xl">GreenAlpha</span>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-[#4CAF50]">Home</Link>
          <Link href="/opportunities" className="text-gray-700 hover:text-[#4CAF50]">Opportunities</Link>
          <Link href="/impact" className="text-gray-700 hover:text-[#4CAF50]">Impact</Link>
          <Link href="/community" className="text-gray-700 hover:text-[#4CAF50]">Community</Link>
          <Link href="/about" className="text-gray-700 hover:text-[#4CAF50]">About</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/auth/signin" className="text-gray-700 hover:text-[#4CAF50]">Log In</Link>
          <Link href="/auth/signup" className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-6 py-2 rounded-lg">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-white via-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16 flex justify-between items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold mb-6">
              Welcome to{" "}
              <div className="inline-block">
                <span className="text-[#4CAF50]">Green</span>
                <span className="text-[#2196F3]">Alpha</span>
              </div>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore impactful investment opportunities and track your environmental & social impact.
            </p>
            <div className="flex gap-4">
              <Link
                href="/get-started"
                className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-4 rounded-lg font-medium"
              >
                Get Started
              </Link>
              <Link
                href="/learn-more"
                className="border-2 border-[#4CAF50] text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div className="flex gap-8 mt-12">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">Empowerment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">Clarity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#4CAF50] flex items-center justify-center">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">Impact</span>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white rounded-xl shadow-xl p-6 w-[500px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-gray-500">Investment Dashboard</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-gray-600">Portfolio Value</div>
                <div className="text-2xl font-bold">$43,210</div>
                <div className="text-green-500 text-sm">↑ 8.3% this month</div>
              </div>
              <div>
                <div className="text-gray-600">Impact Score</div>
                <div className="text-2xl font-bold">92/100</div>
                <div className="text-green-500 text-sm">Top 5% of users</div>
              </div>
            </div>
            <div className="space-y-4">
              <MetricBar label="Carbon Offset" value={85} metric="6.2 tons" color="bg-[#4CAF50]" />
              <MetricBar label="Renewable Energy" value={75} metric="845 kWh" color="bg-[#2196F3]" />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Opportunities Section */}
      <FeaturedOpportunities />

      {/* Impact Tracking Section */}
      <ImpactTracking />

      {/* Community Insights Section */}
      <CommunityInsights />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  )
}

function CheckIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  )
}

function MetricBar({ label, value, metric, color }: { 
  label: string
  value: number
  metric: string
  color: string
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-600">{label}</span>
        <span className="text-gray-900">{metric}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
} 