import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import bcryptjs from "bcryptjs";

export async function POST(request: Request) {
  try {
    console.log("Starting signup process...");
    console.log("Database URL exists:", !!process.env.DATABASE_URL);
    
    // Log request headers
    const headers = Object.fromEntries(request.headers.entries());
    console.log("Request headers:", headers);

    const body = await request.json();
    console.log("Request body:", { ...body, password: '[REDACTED]' });

    const { name, email, password } = body;

    // Validate input
    if (!email || !password || !name) {
      console.log("Missing required fields:", { 
        hasEmail: !!email, 
        hasPassword: !!password, 
        hasName: !!name 
      });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log database connection status
    try {
      console.log("Testing database connection...");
      await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.id, -1), // Test query
      });
      console.log("Database connection test successful");
    } catch (dbTestError) {
      console.error("Database connection test failed:", {
        error: dbTestError,
        message: dbTestError instanceof Error ? dbTestError.message : "Unknown error",
        stack: dbTestError instanceof Error ? dbTestError.stack : undefined
      });
      return NextResponse.json(
        { error: "Database connection failed", details: dbTestError instanceof Error ? dbTestError.message : "Unknown error" },
        { status: 500 }
      );
    }

    // Check if user already exists
    console.log("Checking if user exists:", email);
    const existingUser = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });

    if (existingUser) {
      console.log("User already exists:", email);
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    console.log("Hashing password...");
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log("Password hashed successfully");

    // Create user
    console.log("Attempting to create new user:", email);
    try {
      const [newUser] = await db.insert(users).values({
        name,
        email,
        password: hashedPassword,
      }).returning();

      console.log("User created successfully:", { id: newUser.id, email: newUser.email });
      return NextResponse.json(
        { 
          message: "User created successfully",
          user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          }
        },
        { status: 201 }
      );
    } catch (insertError) {
      console.error("Failed to insert user:", {
        error: insertError,
        message: insertError instanceof Error ? insertError.message : "Unknown error",
        stack: insertError instanceof Error ? insertError.stack : undefined
      });
      return NextResponse.json(
        { error: "Failed to create user", details: insertError instanceof Error ? insertError.message : "Unknown error" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Signup error:", {
      error,
      message: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined
    });
    
    return NextResponse.json(
      { error: "Failed to process signup request", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
} 