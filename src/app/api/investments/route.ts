import { db } from "@/db";
import { investments } from "@/db/schema";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const sampleInvestments = [
  {
    title: "Green Energy Fund",
    description: "Investment in large-scale solar energy production",
    category: "renewable energy",
    amount: "100.00",
    imageUrl: "/images/green-energy.jpg",
    expectedReturn: "8.50",
    riskLevel: "moderate"
  },
  {
    title: "Sustainable Agriculture Fund",
    description: "Supporting eco-friendly farming practices",
    category: "food & agriculture",
    amount: "250.00",
    imageUrl: "/images/agriculture.jpg",
    expectedReturn: "7.20",
    riskLevel: "low"
  },
  {
    title: "Water Purification Technology",
    description: "Clean water solutions for developing regions",
    category: "water technology",
    amount: "150.00",
    imageUrl: "/images/water.jpg",
    expectedReturn: "9.00",
    riskLevel: "moderate"
  }
];

export async function GET() {
  try {
    // Verify authentication
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    // Check if we have any investments
    let allInvestments = await db.query.investments.findMany();
    console.log('Current investments:', allInvestments);

    // If no investments exist, add the sample ones
    if (allInvestments.length === 0) {
      console.log('No investments found, adding sample investments');
      try {
        const inserted = await db.insert(investments).values(sampleInvestments).returning();
        console.log('Sample investments added successfully:', inserted);
        allInvestments = inserted;
      } catch (insertError) {
        console.error('Error inserting sample investments:', insertError);
        throw insertError;
      }
    }

    return NextResponse.json(allInvestments);
  } catch (error) {
    console.error("Error in investments GET route:", error);
    return NextResponse.json(
      { error: "Failed to fetch investments" },
      { status: 500 }
    );
  }
} 