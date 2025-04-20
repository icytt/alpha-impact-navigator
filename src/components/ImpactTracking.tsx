"use client"

export function ImpactTracking() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Track Your Impact
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Real-time tracking helps you see the tangible environmental and social results of your investments.
        </p>

        <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Your Impact Dashboard</h3>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <MetricCard
              label="Total Investment"
              value="$24,500"
              change={{ value: "12%", label: "from last month", positive: true }}
            />
            <MetricCard
              label="Financial Returns"
              value="8.2%"
              change={{ value: "1.4%", label: "from last quarter", positive: true }}
            />
            <MetricCard
              label="Impact Score"
              value="85/100"
              change={{ value: "5", label: "points improvement", positive: true }}
            />
          </div>

          {/* Environmental Impact */}
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-6">Environmental Impact</h4>
              <div className="space-y-6">
                <MetricBar
                  label="Carbon Reduction"
                  value={80}
                  metric="4.2 tons"
                  color="bg-leaf"
                />
                <MetricBar
                  label="Renewable Energy"
                  value={65}
                  metric="342 kWh"
                  color="bg-ocean"
                />
                <MetricBar
                  label="Water Conservation"
                  value={45}
                  metric="650 gallons"
                  color="bg-ocean"
                />
              </div>
            </div>

            {/* Social Impact */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Social Impact</h4>
              <div className="space-y-6">
                <MetricBar
                  label="Jobs Created"
                  value={75}
                  metric="12"
                  color="bg-purple-500"
                />
                <MetricBar
                  label="Community Development"
                  value={60}
                  metric="3 projects"
                  color="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricCard({ 
  label, 
  value, 
  change 
}: { 
  label: string
  value: string
  change: { value: string; label: string; positive: boolean }
}) {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="text-gray-600 mb-2">{label}</div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className={`text-sm ${change.positive ? 'text-green-500' : 'text-red-500'}`}>
        {change.positive ? '↑' : '↓'} {change.value} {change.label}
      </div>
    </div>
  )
}

function MetricBar({ 
  label, 
  value, 
  metric, 
  color 
}: { 
  label: string
  value: number
  metric: string
  color: string
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-600">{label}</span>
        <span className="text-gray-900 font-medium">{metric}</span>
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