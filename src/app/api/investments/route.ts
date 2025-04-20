import { db } from "@/db";
import { investments } from "@/db/schema";
import { NextResponse } from "next/server";

const sampleInvestments = [
  {
    title: "Green Energy Fund",
    description: "Invest in a portfolio of wind, solar, and hydro projects with established track records of consistent returns.",
    category: "Renewable Energy",
    amount: "100.00",
    imageUrl: "/images/green-energy.jpg",
    expectedReturn: "12.50",
    riskLevel: "moderate",
  },
  {
    title: "Sustainable Agriculture",
    description: "Support regenerative farming practices that improve soil health while producing nutritious organic food.",
    category: "Food & Agriculture",
    amount: "250.00",
    imageUrl: "/images/agriculture.jpg",
    expectedReturn: "15.00",
    riskLevel: "moderate-high",
  },
  {
    title: "Clean Water Initiative",
    description: "Fund innovative water purification technologies bringing clean water to underserved communities worldwide.",
    category: "Water Technology",
    amount: "150.00",
    imageUrl: "/images/water.jpg",
    expectedReturn: "10.00",
    riskLevel: "low",
  },
];

export async function GET() {
  try {
    // Check if we have any investments
    let allInvestments = await db.query.investments.findMany();
    console.log('Current investments:', allInvestments);

    // If no investments exist, add the sample ones
    if (allInvestments.length === 0) {
      console.log('No investments found, adding sample investments');
      try {
        await db.insert(investments).values(sampleInvestments);
        console.log('Sample investments added successfully');
        allInvestments = await db.query.investments.findMany();
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