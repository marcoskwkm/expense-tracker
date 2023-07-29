import GoogleProvider from 'next-auth/providers/google'

const clientId = process.env.GOOGLE_OAUTH_CLIENT_ID
const clientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET

if (!clientId || !clientSecret) {
  throw new Error('Missing Google OAuth credentials')
}

export const options = {
  providers: [GoogleProvider({ clientId, clientSecret })],
}
