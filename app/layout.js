import '@/assets/styles/globals.css'
import AuthProvider from '@/components/authProvider/AuthProvider'


export const metadata = {
    
    title: 'Photo Studio App',
    description: 'Session management and client management tool for photographers',
    keywords: 'Photographer, CRM, Photography CRM, Client Management, Session Management',
    
        
}

export default function MainLayout({ children }) {

    return (
        <AuthProvider>
            <html lang="en">
                <body>

                    <main>
                        { children }
                    </main>
                </body>
            </html>
        </AuthProvider>
    )
}