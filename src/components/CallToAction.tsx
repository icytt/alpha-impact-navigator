"use client"

import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-leaf to-ocean text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Make an Impact?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Seamlessly integrate your financial goals with your desire to create positive change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/auth/signup"
            className="bg-white text-leaf hover:bg-gray-100 px-8 py-3 rounded-lg font-medium"
          >
            Sign Up
          </Link>
          <Link
            href="/learn-more"
            className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
} 