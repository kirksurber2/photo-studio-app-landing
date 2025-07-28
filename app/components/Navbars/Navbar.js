'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../components/Navbars/Navbar.module.css'
import logo from '../../../assets/images/images/logoBlack-200.png'
import { LuUserCircle2, LuMenu } from 'react-icons/lu'
import { FaGoogle, FaRegBell } from 'react-icons/fa'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className={!mobileMenu ? styles.navbar : styles.mobileNavbar}>
      <Link href='/'>
        <Image src={logo} width={200} alt='logo image' />
      </Link>

      <Link href='/about'>About</Link>
      <Link href='/features'>Features</Link>

      {/* Dropdown wrapper */}
      <div
        className={styles.dropdown}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        <span className={styles.dropdownTitle}>Training & Education</span>
        {showDropdown && (
          <div className={styles.dropdownMenu}>
            <Link href='/photography-training-and-education'>Training and Education</Link>
            
          </div>
        )}
      </div>

      <Link href='/refer-a-friend'>Refer-a-Friend</Link>

      <Link href='https://app.photostudioapp.com/login'>
        <button>Login</button>
      </Link>
    </div>
  )
}
