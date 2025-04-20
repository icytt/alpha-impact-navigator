import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import bcryptjs from "bcryptjs";

export async function POST(request: Request) {
  try {
    console.log("Starting signup process...");
    
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
      await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.id, -1), // Test query
      });
      console.log("Database connection test successful");
    } catch (dbTestError) {
      console.error("Database connection test failed:", dbTestError);
      throw dbTestError;
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
  } catch (error) {
    console.error("Signup error:", error);
    
    // Check if it's a database-related error
    if (error instanceof Error && error.message.includes('database')) {
      return NextResponse.json(
        { error: "Database error occurred" },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
} 