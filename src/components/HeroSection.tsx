
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden">
      {/* Abstract green shapes in the background */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-full opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-green-300 blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-200 blur-3xl transform -translate-x-1/2 translate-y-1/4"></div>
      </div>
      
      <div className="container relative z-10 py-20 md:py-32 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-leaf">Green<span className="text-ocean">Alpha</span></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
            Explore impactful investment opportunities and track your environmental & social impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <Button size="lg" className="bg-leaf hover:bg-leaf-dark text-white text-lg px-6">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-leaf text-leaf hover:bg-leaf/10 text-lg px-6">
              Learn More
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 text-gray-700">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Empowerment</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Clarity</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Impact</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-sm font-medium text-gray-500">Investment Dashboard</div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Portfolio Value</h4>
                  <p className="text-2xl font-bold text-gray-900">$43,210</p>
                  <p className="text-xs text-green-600 mt-1">↑ 8.3% this month</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Impact Score</h4>
                  <p className="text-2xl font-bold text-gray-900">92/100</p>
                  <p className="text-xs text-green-600 mt-1">Top 5% of users</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-500">Carbon Offset</span>
                    <span className="text-sm font-medium text-gray-900">6.2 tons</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-500">Renewable Energy</span>
                    <span className="text-sm font-medium text-gray-900">845 kWh</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-ocean to-ocean-light rounded-lg transform rotate-12 opacity-30 blur-lg"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-leaf to-green-300 rounded-full transform opacity-30 blur-lg"></div>
        </div>
      </div>
    </div>
  );
}
