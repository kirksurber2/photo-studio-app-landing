import GoogleProvider from 'next-auth/providers/google'
import  CredentialsProvider  from 'next-auth/providers/credentials'

export const authOptions ={
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {

                email: { label: '', type: 'email', placeholder: 'Email'},
                password: {label: '', type: 'password', placeholder: 'Password'}
            },
            async authorize(credentials, req) {
                const res = await fetch('/auth/login', {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: {'Content-Type': "application/json" }
                })
                const user = await res.json()

                if(res.ok && user) {
                    return user
                }
                return null
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLEOAUTHCLIENTID,
            clientSecret: process.env.GOOGLEOAUTHSECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
            
        }),
        
    ],
    callbacks: {
        // Invoked on Successful signin
        async signIn({ profile }) {
            //Connect to DB

            // Check if user exists

            // if not, then add user to DB

            // Return true to allow signin
        },
        //Modifies the session object 
        async session ({ session }) {
            // Get user from db

            // assing user ID to the session

            //return session
        }
    }

}