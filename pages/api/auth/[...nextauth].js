import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization:{
        params:{
          scope:"openid email profile"
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, account }) {
      if(!account?.type == 'oauth') {
        return;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();

      // token.sub is Google's user ID
      session.user.uid = token.sub;

      session.token = token;

      return session;
    }
  },
  secret: "osJy+s78cHjOTfWda0+gA6W4rcwS6o1vnYJgxeRqesw="
})
