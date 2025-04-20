import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../db';
import { users } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password, name } = req.body;

  try {
    console.log('Checking for existing user...');
    // Check if user already exists
    const existingUser = await db.select().from(users).where(eq(users.email, email)).execute();
    
    console.log('Existing user check result:', existingUser);
    
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    console.log('Hashing password...');
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('Inserting new user...');
    // Insert new user
    const newUser = await db.insert(users).values({
      email,
      password: hashedPassword,
      name,
    }).returning();

    console.log('User created:', newUser);

    return res.status(201).json({ message: 'User created successfully', user: newUser[0] });
  } catch (error) {
    console.error('Registration error details:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 