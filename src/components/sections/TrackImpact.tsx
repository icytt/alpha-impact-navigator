
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "@/components/DashboardPreview";

export function TrackImpact() {
  return (
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
  );
}
