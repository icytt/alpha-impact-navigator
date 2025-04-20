import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("Please provide process.env.NEXTAUTH_SECRET");
}

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log("Missing credentials");
          return null;
        }

        const user = await db.query.users.findFirst({
          where: eq(users.email, credentials.email),
        });

        if (!user) {
          console.log("User not found");
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          console.log("Invalid password");
          return null;
        }

        console.log("User authenticated successfully:", user.email);
        return {
          id: String(user.id),
          email: user.email,
          name: user.name,
        };
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string;
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
}; 