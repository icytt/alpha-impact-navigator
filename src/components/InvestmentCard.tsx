
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface InvestmentCardProps {
  title: string;
  sector: string;
  range: string;
  description: string;
  image: string;
  tags: string[];
}

export function InvestmentCard({ title, sector, range, description, image, tags }: InvestmentCardProps) {
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
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Learn More</Button>
        <Button className="bg-leaf hover:bg-leaf-dark text-white">Invest Now</Button>
      </CardFooter>
    </Card>
  );
}
