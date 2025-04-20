import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    console.log("Starting signup process...");
    
    const { name, email, password } = await request.json();
    console.log("Received signup data for:", email);

    // Validate input
    if (!email || !password || !name) {
      console.log("Missing required fields:", { email: !!email, password: !!password, name: !!name });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    console.log("Checking if user exists:", email);
    try {
      const existingUser = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, email),
      });
      console.log("Existing user check result:", existingUser ? "Found" : "Not found");

      if (existingUser) {
        console.log("User already exists:", email);
        return NextResponse.json(
          { error: "User already exists" },
          { status: 400 }
        );
      }
    } catch (dbError) {
      console.error("Database error during user check:", dbError);
      throw dbError;
    }

    // Hash password
    console.log("Hashing password...");
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
      console.log("Password hashed successfully");
    } catch (hashError) {
      console.error("Error hashing password:", hashError);
      throw hashError;
    }

    // Create user
    console.log("Creating new user:", email);
    try {
      const [newUser] = await db.insert(users).values({
        name,
        email,
        password: hashedPassword,
      }).returning();

      console.log("User created successfully:", email);
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
      console.error("Database error during user creation:", insertError);
      throw insertError;
    }
  } catch (error) {
    console.error("Signup error details:", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      name: error instanceof Error ? error.name : "Unknown error type"
    });
    
    // Log any additional error properties
    if (error instanceof Error) {
      console.error("Additional error properties:", Object.keys(error));
      if ('cause' in error) {
        console.error("Error cause:", error.cause);
      }
    }
    
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 