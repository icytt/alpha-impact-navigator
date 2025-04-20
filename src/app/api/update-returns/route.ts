import { db } from "@/db";
import { userInvestments } from "@/db/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    // Get all user investments with their investment details
    const allUserInvestments = await db.query.userInvestments.findMany({
      with: {
        investment: true
      }
    });

    // Update each investment's return
    const updates = await Promise.all(
      allUserInvestments.map(async (userInvestment) => {
        const initialAmount = Number(userInvestment.amount);
        const investmentDate = userInvestment.investedAt ? new Date(userInvestment.investedAt) : new Date();
        const now = new Date();
        const daysInvested = Math.floor((now.getTime() - investmentDate.getTime()) / (1000 * 60 * 60 * 24));
        
        // Calculate pro-rated return based on days invested
        const expectedAnnualReturn = Number(userInvestment.investment.expectedReturn) || 10;
        const proRatedReturn = (expectedAnnualReturn * daysInvested) / 365;
        
        // Calculate current value with compound interest
        const currentValue = initialAmount * (1 + (proRatedReturn / 100));

        // Update the user investment
        return db
          .update(userInvestments)
          .set({
            currentValue: currentValue.toString(),
            totalReturn: proRatedReturn.toString(),
            lastValuationDate: new Date()
          })
          .where(eq(userInvestments.id, userInvestment.id))
          .returning();
      })
    );

    return NextResponse.json({ 
      message: "Investment returns updated successfully",
      updatedInvestments: updates.length
    });
  } catch (error) {
    console.error("Error updating investment returns:", error);
    return NextResponse.json(
      { error: "Failed to update investment returns" },
      { status: 500 }
    );
  }
} 