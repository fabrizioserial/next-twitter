import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";

console.log("NextAuth.js")

function getGithubCredentials() {
    const clientId = process.env.GITHUB_ID
    const clientSecret = process.env.GITHUB_SECRET

    if (!clientId || clientId.length === 0) {
        throw new Error('Missing GITHUB_ID')
    }

    if (!clientSecret || clientSecret.length === 0) {
        throw new Error('Missing GITHUB_SECRET')
    }

    return { clientId, clientSecret }
}

export const authOptions = {
    // Configure one or more authentication providers
    providers: [

        GitHubProvider({
            clientId: getGithubCredentials().clientId,
            clientSecret:getGithubCredentials().clientSecret,
        }),
    ],
    callbacks: {
        async jwt({ token, user }:any) {
            return { ...token, ...user };
        },
        async session({ session, token, user }:any) {
            session.user = user
            return session;
        },
    },
    adapter: PrismaAdapter(prisma),
}
export default NextAuth(authOptions)
