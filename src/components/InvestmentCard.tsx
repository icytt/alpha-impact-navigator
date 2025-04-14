
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Info } from "lucide-react";

interface InvestmentCardProps {
  title: string;
  sector: string;
  range: string;
  description: string;
  image: string;
  tags: string[];
}

export function InvestmentCard({ title, sector, range, description, image, tags }: InvestmentCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMore = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-2 border-transparent hover:border-leaf-light">
      <div 
        className="h-48 w-full bg-cover bg-center" 
        style={{ backgroundImage: `url(${image})` }}
      />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-1">{title}</CardTitle>
            <CardDescription className="text-gray-500">{sector}</CardDescription>
          </div>
          <Badge className="bg-leaf hover:bg-leaf-dark">{range}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
        
        {showDetails && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200">
            <div className="flex items-center gap-2 mb-2 text-leaf">
              <Info size={16} />
              <h4 className="font-medium">Additional Information</h4>
            </div>
            <p className="text-sm text-gray-700">
              This {title.toLowerCase()} opportunity offers a sustainable investment option with potential for both financial returns and positive environmental impact. 
              The project has undergone thorough due diligence and meets our strict ESG criteria.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="font-medium text-gray-700">Expected Return:</p>
                <p>5-8% annually</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Minimum Term:</p>
                <p>24 months</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" onClick={handleLearnMore}>
          {showDetails ? "Show Less" : "Learn More"}
        </Button>
        <Button className="bg-leaf hover:bg-leaf-dark text-white">Invest Now</Button>
      </CardFooter>
    </Card>
  );
}
