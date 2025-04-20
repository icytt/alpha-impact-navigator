'use client';

import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Investment {
  id: number;
  title: string;
  description: string;
  category: string;
  amount: string;
  imageUrl: string;
  expectedReturn: number;
  riskLevel: string;
}

interface UserInvestment {
  id: number;
  amount: string;
  investedAt: string;
  currentValue: string;
  totalReturn: number;
  investment: Investment;
}

interface ImpactMetrics {
  environmental: number;
  social: number;
  governance: number;
  total: number;
  waterSaved: number;
  treesPlanted: number;
  communityBeneficiaries: number;
}

interface DashboardMetrics {
  portfolioValue: number;
  monthlyGrowth: number;
  impactScore: number;
  userRankPercentile: number;
  carbonOffset: number;
  renewableEnergy: number;
}

const PLACEHOLDER_IMAGES = {
  'renewable energy': '/images/green-energy.jpg',
  'food & agriculture': '/images/agriculture.jpg',
  'water technology': '/images/water.jpg',
  'default': '/images/green-energy.jpg',
};

// Define the initial investments outside of the component
const initialInvestments: Investment[] = [
  {
    id: 1,
    title: "Green Energy Fund",
    description: "Investment in large-scale solar energy production",
    category: "renewable energy",
    amount: "100.00",
    imageUrl: "/images/green-energy.jpg",
    expectedReturn: 8.5,
    riskLevel: "moderate"
  },
  {
    id: 2,
    title: "Sustainable Agriculture Fund",
    description: "Supporting eco-friendly farming practices",
    category: "food & agriculture",
    amount: "250.00",
    imageUrl: "/images/agriculture.jpg",
    expectedReturn: 7.2,
    riskLevel: "low"
  },
  {
    id: 3,
    title: "Water Purification Technology",
    description: "Clean water solutions for developing regions",
    category: "water technology",
    amount: "150.00",
    imageUrl: "/images/water.jpg",
    expectedReturn: 9.0,
    riskLevel: "moderate"
  }
];

export default function DashboardPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("Session is unauthenticated, redirecting to signin");
      router.push("/auth/signin");
    },
  });
  const router = useRouter();
  const [investments, setInvestments] = useState<Investment[]>(initialInvestments);
  const [userInvestments, setUserInvestments] = useState<UserInvestment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvestment, setSelectedInvestment] = useState<Investment | null>(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investing, setInvesting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [portfolioStats, setPortfolioStats] = useState({
    totalValue: 0,
    numberOfInvestments: 0,
    impactScore: 0
  });
  const [impactMetrics, setImpactMetrics] = useState<ImpactMetrics>({
    environmental: 0,
    social: 0,
    governance: 0,
    total: 0,
    waterSaved: 0,
    treesPlanted: 0,
    communityBeneficiaries: 0
  });
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    portfolioValue: 0,
    monthlyGrowth: 0,
    impactScore: 0,
    userRankPercentile: 0,
    carbonOffset: 0,
    renewableEnergy: 0
  });

  // Helper function to calculate progress percentage with max cap
  const calculateProgress = (value: number, maxValue: number) => {
    return Math.min((value / maxValue) * 100, 100);
  };

  useEffect(() => {
    console.log("Dashboard useEffect - Status:", status);
    console.log("Dashboard useEffect - Session:", session);

    if (status === "loading") {
      console.log("Status is loading, waiting...");
      return;
    }
    
    if (!session) {
      console.log("No session, redirecting...");
      router.push("/auth/signin");
      return;
    }

    if (session?.user) {
      console.log("User is authenticated:", session.user);
      setLoading(false);
    }
  }, [status, session, router]);

  const calculateMonthlyGrowth = (investments: UserInvestment[]) => {
    return investments.reduce((growth: number, inv: UserInvestment) => {
      const returnRate = Number(inv.totalReturn || 0);
      return growth + (returnRate > 0 ? returnRate : 0);
    }, 0) / (investments.length || 1);
  };

  const calculateImpactMetrics = (investments: UserInvestment[]) => {
    // Keep the zero check for no investments
    if (!investments || investments.length === 0) {
      setImpactMetrics({
        environmental: 0,
        social: 0,
        governance: 0,
        total: 0,
        waterSaved: 0,
        treesPlanted: 0,
        communityBeneficiaries: 0
      });
      setMetrics({
        portfolioValue: 0,
        monthlyGrowth: 0,
        impactScore: 0,
        userRankPercentile: 0,
        carbonOffset: 0,
        renewableEnergy: 0
      });
      return;
    }

    const totalValue = investments.reduce((sum, inv) => sum + Number(inv.amount), 0);
    
    // Reduce base impact calculation
    const metrics = investments.reduce((acc, inv) => {
      const amount = Number(inv.amount);
      // Reduce base impact
      const baseImpact = Math.max(10, Math.log10(amount + 1) * 6); // Reduced from 8 to 6
      
      switch(inv.investment.category.toLowerCase()) {
        case 'renewable energy':
          acc.environmental += baseImpact * 1.2; // Reduced from 1.5
          acc.social += baseImpact * 0.5; // Reduced from 0.6
          acc.governance += baseImpact * 0.3; // Reduced from 0.4
          acc.waterSaved += amount * 0.03; // Reduced from 0.05
          acc.treesPlanted += Math.floor(amount * 0.01); // Reduced from 0.02
          break;
        case 'food & agriculture':
          acc.environmental += baseImpact * 0.6; // Reduced from 0.8
          acc.social += baseImpact * 1.2; // Reduced from 1.5
          acc.governance += baseImpact * 0.3; // Reduced from 0.4
          acc.waterSaved += amount * 0.04; // Reduced from 0.06
          acc.communityBeneficiaries += Math.floor(amount * 0.02); // Reduced from 0.03
          break;
        case 'water technology':
          acc.environmental += baseImpact * 1.0; // Reduced from 1.2
          acc.social += baseImpact * 0.6; // Reduced from 0.8
          acc.governance += baseImpact * 0.4; // Reduced from 0.6
          acc.waterSaved += amount * 0.05; // Reduced from 0.08
          acc.communityBeneficiaries += Math.floor(amount * 0.01); // Reduced from 0.02
          break;
        default:
          const evenImpact = baseImpact / 3;
          acc.environmental += evenImpact;
          acc.social += evenImpact;
          acc.governance += evenImpact;
      }
      return acc;
    }, {
      environmental: 0,
      social: 0,
      governance: 0,
      waterSaved: 0,
      treesPlanted: 0,
      communityBeneficiaries: 0
    });

    // Keep score calculation without minimums
    const calculateComponentScore = (value: number) => {
      return Math.min(100, Math.round(value));
    };

    const environmentalScore = calculateComponentScore(metrics.environmental);
    const socialScore = calculateComponentScore(metrics.social);
    const governanceScore = calculateComponentScore(metrics.governance);
    
    const overallScore = Math.round(
      (environmentalScore + socialScore + governanceScore) / 3
    );
    
    setImpactMetrics({
      ...metrics,
      environmental: environmentalScore,
      social: socialScore,
      governance: governanceScore,
      total: overallScore
    });

    // Reduce progress rates for metrics
    const carbonOffset = totalValue * 0.00005; // Reduced from 0.0001
    const renewableEnergy = totalValue * 1; // Reduced from 2

    setMetrics({
      portfolioValue: totalValue,
      monthlyGrowth: calculateMonthlyGrowth(investments),
      impactScore: overallScore,
      userRankPercentile: investments.length > 0 ? 95 : 0,
      carbonOffset: carbonOffset,
      renewableEnergy: renewableEnergy
    });
  };

  const fetchUserInvestments = async () => {
    try {
      console.log("Fetching user investments with session:", session);
      const response = await fetch('/api/user-investments', {
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        const data = await response.json();
        console.log("User investments fetch failed:", data);
        if (data.error === "Not authenticated") {
          router.push('/auth/signin');
          return;
        }
        throw new Error(data.error || 'Failed to fetch investments');
      }

      const data = await response.json();
      console.log("Fetched user investments:", data);
      setUserInvestments(data);
      
      // Debug logs for impact calculation
      console.log("Starting impact calculation with investments:", data);
      
      const totalValue = data.reduce((sum: number, inv: UserInvestment) => 
        sum + Number(inv.amount), 0);
      console.log("Total investment value:", totalValue);
      
      calculateImpactMetrics(data);
      
      // Log the calculated metrics
      console.log("Calculated metrics:", metrics);
      console.log("Calculated impact metrics:", impactMetrics);

      // Calculate portfolio statistics
      setPortfolioStats({
        totalValue,
        numberOfInvestments: data.length,
        impactScore: impactMetrics.total
      });
      
      console.log("Updated portfolio stats:", {
        totalValue,
        numberOfInvestments: data.length,
        impactScore: impactMetrics.total
      });
    } catch (error) {
      console.error('Error fetching investments:', error);
      toast.error('Failed to fetch investments');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch available investments
        const investmentsResponse = await fetch('/api/investments');
        if (investmentsResponse.ok) {
          const investmentsData = await investmentsResponse.json();
          setInvestments(investmentsData);
        }
        
        // Fetch user investments
        await fetchUserInvestments();
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  const handleInvest = async () => {
    if (!selectedInvestment || !investmentAmount) return;

    setInvesting(true);
    try {
      const response = await fetch('/api/user-investments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          investmentId: selectedInvestment.id,
          amount: investmentAmount,
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        const data = await response.json();
        if (data.error === "Not authenticated") {
          router.push('/auth/signin');
        } else {
          toast.error(data.error || 'Failed to make investment');
        }
        return;
      }

      await response.json();
      toast.success('Investment successful!');
      await fetchUserInvestments();
      setDialogOpen(false);
      setSelectedInvestment(null);
      setInvestmentAmount("");
    } catch (error) {
      console.error('Error making investment:', error);
      toast.error('Failed to make investment');
    } finally {
      setInvesting(false);
    }
  };

  if (status === "loading" || loading) {
    console.log("Rendering loading state");
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg">Loading...</div>
          <div className="text-sm text-gray-500">Please wait while we verify your session</div>
          <div className="text-xs text-gray-400 mt-2">Status: {status}</div>
        </div>
      </div>
    );
  }

  if (!session?.user) {
    console.log("No session user, returning null");
    return null;
  }

  const getInvestmentImage = (investment: Investment) => {
    const category = investment.category.toLowerCase();
    return PLACEHOLDER_IMAGES[category as keyof typeof PLACEHOLDER_IMAGES] || PLACEHOLDER_IMAGES.default;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Investment Dashboard</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {session?.user?.name}</span>
              <Button variant="outline" onClick={handleLogout}>
                Log out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Main Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl text-gray-600 mb-4">Portfolio Value</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">${metrics.portfolioValue.toLocaleString()}</span>
                <div className="flex items-center text-green-500">
                  <ArrowUpIcon className="h-4 w-4" />
                  <span className="text-sm">{metrics.monthlyGrowth.toFixed(1)}% this month</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl text-gray-600 mb-4">Impact Score</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{metrics.impactScore}/100</span>
                <span className="text-sm text-green-500">Top {100 - metrics.userRankPercentile}% of users</span>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-6">Impact Metrics</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Carbon Offset</span>
                  <span className="text-gray-900">{metrics.carbonOffset.toFixed(3)} tons</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full transition-all duration-500" 
                    style={{ width: `${calculateProgress(metrics.carbonOffset, 20)}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Renewable Energy</span>
                  <span className="text-gray-900">{metrics.renewableEnergy.toLocaleString()} kWh</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-500" 
                    style={{ width: `${calculateProgress(metrics.renewableEnergy, 200000)}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Water Saved</span>
                  <span className="text-gray-900">{Math.round(impactMetrics.waterSaved).toLocaleString()} L</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-500 rounded-full transition-all duration-500" 
                    style={{ width: `${calculateProgress(impactMetrics.waterSaved, 10000)}%` }}
                  />
                </div>
              </div>
            </div>
            
            {/* Additional Impact Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="text-sm text-gray-600 block">Trees Planted</span>
                <span className="text-xl font-semibold text-green-600">
                  {Math.round(impactMetrics.treesPlanted).toLocaleString()}
                </span>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <span className="text-sm text-gray-600 block">Communities Impacted</span>
                <span className="text-xl font-semibold text-blue-600">
                  {Math.round(impactMetrics.communityBeneficiaries).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Your Investments Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Your Investments</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {userInvestments.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Investment</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Value</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {userInvestments.map((investment) => (
                        <tr key={investment.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 relative flex-shrink-0">
                                <Image
                                  src={getInvestmentImage(investment.investment)}
                                  alt={investment.investment.title}
                                  fill
                                  className="rounded-full object-cover"
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{investment.investment.title}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {investment.investment.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatCurrency(Number(investment.amount))}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatCurrency(Number(investment.currentValue || investment.amount))}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              Number(investment.totalReturn || 0) >= 0 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {Number(investment.totalReturn || 0) >= 0 ? '+' : ''}{Number(investment.totalReturn || 0).toFixed(2)}%
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(investment.investedAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">
                  You haven't made any investments yet. Start investing to build your portfolio!
                </div>
              )}
            </div>
          </section>

          {/* Available Investments Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Available Investment Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investments.map((investment) => (
                <div key={investment.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={getInvestmentImage(investment)}
                      alt={investment.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        {investment.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{investment.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{investment.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Min. Investment</span>
                      <span className="font-semibold">${investment.amount}</span>
                    </div>
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full mt-4"
                          onClick={() => {
                            setSelectedInvestment(investment);
                            setDialogOpen(true);
                          }}
                        >
                          Invest Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Invest in {selectedInvestment?.title}</DialogTitle>
                          <DialogDescription>
                            Enter the amount you would like to invest
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Investment Amount</label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                              <Input
                                type="text"
                                inputMode="decimal"
                                pattern="[0-9]*\.?[0-9]*"
                                placeholder={selectedInvestment?.amount || "0.00"}
                                value={investmentAmount}
                                onChange={(e) => {
                                  const value = e.target.value.replace(/[^0-9.]/g, '');
                                  if (value === '' || /^\d*\.?\d*$/.test(value)) {
                                    setInvestmentAmount(value);
                                  }
                                }}
                                className="pl-8"
                              />
                            </div>
                            <p className="text-sm text-gray-500">
                              Minimum investment: ${selectedInvestment?.amount}
                            </p>
                          </div>
                          <Button 
                            className="w-full" 
                            onClick={handleInvest}
                            disabled={investing || !investmentAmount || Number(investmentAmount) < Number(selectedInvestment?.amount)}
                          >
                            {investing ? "Processing..." : "Confirm Investment"}
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 