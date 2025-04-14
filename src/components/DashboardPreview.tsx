
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DashboardPreview() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 max-w-4xl mx-auto">
      <div className="bg-gray-50 p-4 border-b border-gray-200">
        <h3 className="font-bold text-lg text-gray-900">Your Impact Dashboard</h3>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-4 md:p-6">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Total Investment</h4>
              <p className="text-2xl font-bold text-gray-900">$24,500</p>
              <p className="text-xs text-green-600 mt-1">↑ 12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 md:p-6">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Financial Returns</h4>
              <p className="text-2xl font-bold text-gray-900">8.2%</p>
              <p className="text-xs text-green-600 mt-1">↑ 1.4% from last quarter</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 md:p-6">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Impact Score</h4>
              <p className="text-2xl font-bold text-gray-900">85/100</p>
              <p className="text-xs text-green-600 mt-1">↑ 5 points improvement</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <h4 className="font-medium text-gray-900 mb-4">Environmental Impact</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Carbon Reduction</span>
                <span className="text-sm font-medium text-gray-900">4.2 tons</span>
              </div>
              <Progress value={70} className="h-2 bg-gray-200 [&>div]:bg-green-500" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Renewable Energy</span>
                <span className="text-sm font-medium text-gray-900">342 kWh</span>
              </div>
              <Progress value={85} className="h-2 bg-gray-200 [&>div]:bg-ocean" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Water Conservation</span>
                <span className="text-sm font-medium text-gray-900">650 gallons</span>
              </div>
              <Progress value={45} className="h-2 bg-gray-200 [&>div]:bg-blue-500" />
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Social Impact</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Jobs Created</span>
                <span className="text-sm font-medium text-gray-900">12</span>
              </div>
              <Progress value={60} className="h-2 bg-gray-200 [&>div]:bg-purple-500" />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">Community Development</span>
                <span className="text-sm font-medium text-gray-900">3 projects</span>
              </div>
              <Progress value={50} className="h-2 bg-gray-200 [&>div]:bg-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
