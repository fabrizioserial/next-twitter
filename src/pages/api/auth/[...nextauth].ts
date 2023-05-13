import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

console.log("NextAuth.js")
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch(`http://localhost:8080/api/auth/login`, {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

                console.log(user)

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }:any) {
            return { ...token, ...user };
        },
        async session({ session, token, user }:any) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;

            return session;
        },
    },
}
export default NextAuth(authOptions)
