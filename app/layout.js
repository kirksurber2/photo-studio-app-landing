import '@/app/globals.css'
import AuthProvider from '@/components/authProvider/AuthProvider'
import Head from 'next/head'

export const metadata = {
    
    title: 'Photo Studio App',
    description: 'Session management and client management tool for photographers',
    keywords: 'Photographer, CRM, Photography CRM, Client Management, Session Management',
    icons: {
        icon: '/favicon.ico'
    }
        
}

export default function MainLayout({ children }) {

    return (
         <AuthProvider>
            <html lang="en">
                <Head>
                 <link rel="icon" href="/favicon.ico" sizes="any" />
                </Head>
                <body>

                    <main>
                        { children }
                    </main>
                </body>
            </html>
         </AuthProvider>
    )
}