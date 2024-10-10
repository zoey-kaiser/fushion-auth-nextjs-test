import NextAuth from "next-auth"
import FusionAuth from "next-auth/providers/fusionauth"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        FusionAuth({
          clientId: process.env.AUTH_FUSIONAUTH_ID,
          clientSecret: process.env.AUTH_FUSIONAUTH_SECRET,
          tenantId: process.env.AUTH_FUSIONAUTH_TENANT_ID,
          issuer: process.env.AUTH_FUSIONAUTH_ISSUER,
        }),
      ],
})
