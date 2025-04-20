import { db } from "@/db";
import { userInvestments, investments } from "@/db/schema";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log('GET /api/user-investments - Session:', session);

    if (!session?.user?.id) {
      console.log('GET /api/user-investments - No authenticated user');
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const userInvestmentsList = await db.query.userInvestments.findMany({
      where: eq(userInvestments.userId, parseInt(session.user.id)),
      with: {
        investment: true
      }
    });

    return NextResponse.json(userInvestmentsList);
  } catch (error) {
    console.error('GET /api/user-investments - Error:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log('POST /api/user-investments - Session:', session);

    if (!session?.user?.id) {
      console.log('POST /api/user-investments - No authenticated user');
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const body = await request.json();
    console.log('POST /api/user-investments - Request body:', body);

    const { investmentId, amount } = body;

    if (!investmentId || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Get the investment details to calculate returns
    const investmentDetails = await db.query.investments.findFirst({
      where: eq(investments.id, investmentId)
    });

    if (!investmentDetails) {
      return NextResponse.json({ error: "Investment not found" }, { status: 404 });
    }

    // Calculate initial return based on expected return rate
    const expectedAnnualReturn = Number(investmentDetails.expectedReturn) || 10; // Default to 10% if not set
    const daysInvested = 0; // New investment
    const proRatedReturn = (expectedAnnualReturn * daysInvested) / 365;
    const currentValue = amount; // Initial value equals investment amount

    const investment = await db.insert(userInvestments).values({
      userId: parseInt(session.user.id),
      investmentId: investmentId,
      amount: amount.toString(),
      investedAt: new Date(),
      currentValue: currentValue.toString(),
      totalReturn: proRatedReturn.toString(),
      lastValuationDate: new Date()
    }).returning();

    // Fetch the complete investment details after creation
    const completeInvestment = await db.query.userInvestments.findFirst({
      where: eq(userInvestments.id, investment[0].id),
      with: {
        investment: true
      }
    });

    console.log('POST /api/user-investments - Created investment:', completeInvestment);
    return NextResponse.json(completeInvestment);
  } catch (error) {
    console.error('POST /api/user-investments - Error:', error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
} 