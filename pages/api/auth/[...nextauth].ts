// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {  label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user)
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return Promise.resolve(null)
        }
      }
    })
  ],

  // A database is optional, but required to persist accounts in a database
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign and verify the JWT tokens used to implement session management.
  secret: process.env.AUTH_SECRET,
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,
  },

  // You can define custom pages for signing in, signing out, error handling, etc.
  // Custom pages will override the built-in pages.
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: null // If set, new users will be directed here on first sign in
  }
});
