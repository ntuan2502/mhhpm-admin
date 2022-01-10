import axios from "axios";
import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        identifier: {
          label: "Username",
          type: "text",
          placeholder: "username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/local`,
          {
            identifier: credentials.identifier,
            password: credentials.password,
          }
        );
        const user = res.data;
        // If no error and we have user data, return it
        if (
          user.jwt &&
          user.user &&
          (user.user.role.name == "Staff" || user.user.role.name == "Admin")
        ) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.jwt = user.jwt;
        // token.access_token = account.access_token;
        token.user = user.user;
      }

      // console.log("account: ", account);
      // console.log("token: ", token);
      // console.log("user: ", user);
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.jwt = token.jwt;
      // session.access_token = token.access_token;
      session._user = token.user;
      // console.log("session: ", session);
      // console.log("token: ", token);
      return session;
    },
  },
  secret: "f35300bcf8c734e9816068b79b702ae6",
  jwt: {
    secret: "f35300bcf8c734e9816068b79b702ae6",
    encryption: true,
  },
});
