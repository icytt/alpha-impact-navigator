import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcryptjs from "bcryptjs";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("Please provide process.env.NEXTAUTH_SECRET");
}

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  debug: process.env.NODE_ENV === "development",
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const user = await db.query.users.findFirst({
          where: (users, { eq }) => eq(users.email, credentials.email),
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isPasswordValid = await bcryptjs.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: String(user.id),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
}; 