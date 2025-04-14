
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
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
  );
}
