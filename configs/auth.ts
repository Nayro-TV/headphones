import { AuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authConfig: AuthOptions = {
	providers: [
		GitHubProvider({
			clientId: '' as string,
			clientSecret: '' as string,
		}),
    CredentialsProvider({
			name: 'Credentials',
      credentials: {
        username: {
          label: 'Username'
        }
      },
      async () => {
        
      }
		}),
	],
}
