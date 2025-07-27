'use client'
import { useState, useEffect } from 'react'
import  Link  from 'next/link'
//import { signIn, signOut, useSession, getProviders} from 'next-auth/react'
import Image from 'next/image'
import logo from '../../assets/images/images/logoBlack-200.png'
import styles from '../../components/Navbars/Navbar.module.css'
import { LuUserCircle2, LuMenu } from "react-icons/lu";
import { FaGoogle, FaRegBell } from 'react-icons/fa'



 export default function Navbar () {
     

    const [mobileMenu, setMobileMenu] = useState(false)
   

 




    return (
        
        <div className={!mobileMenu? styles.navbar : styles.mobileNavbar}>    
            <Link href='/'>
                <Image src={logo} width={200} alt='logo image'/>
            </Link>
            

            <Link href='/about'>About</Link>
            <Link href='/features'>Features</Link>
            <Link href='/training'>Learn Photography</Link>
            <Link href='/training'>Learn Business</Link>
            <Link href='/training'>Learn Facebook Ads</Link>
            <Link href='/refer-a-friend'>Refer-a-Friend</Link>
            
            
                {/* <div>
                    {providers &&
                    Object.values(providers).map((provider, index) => (

                    <button onClick={() => signIn(provider.id)} key={index}>
                        {provider.id === "google" &&
                        <>
                        <FaGoogle style={{marginRight: 10}}/>
                        <span>Google Login</span>
                        </>
                        }
                        {provider.id === 'credentials' &&
                        <span>Email</span>
                        }
                    </button>            
                    )) 
                    }
                </div> */}
            
           
            <Link href={'https://app.photostudioapp.com/login'}>
                <button>
                    Login
                </button>
            </Link>
        </div>
        
    )
}

