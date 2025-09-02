'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'
import logo from '../../../assets/images/images/logoBlack-200.png'
import { FaUser, FaBars, FaTimes, FaChevronDown, FaCamera, FaBriefcase, FaMobile, FaFacebook, FaCrown } from 'react-icons/fa'

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  const closeMobileMenu = () => {
    setMobileMenu(false)
    setShowDropdown(false)
  }

  const trainingLinks = [
    {
      href: '/training/photography',
      title: 'Photography Training',
      icon: <FaCamera className={styles.dropdownIcon} />,
      description: 'Master your camera and techniques'
    },
    {
      href: '/training/photography-business',
      title: 'Photography Business',
      icon: <FaBriefcase className={styles.dropdownIcon} />,
      description: 'Build a successful photography business'
    },
    {
      href: '/training/photo-studio-app',
      title: 'Photo Studio App',
      icon: <FaMobile className={styles.dropdownIcon} />,
      description: 'Get the most out of our platform'
    },
    {
      href: '/training/facebook-ads',
      title: 'Facebook Ads',
      icon: <FaFacebook className={styles.dropdownIcon} />,
      description: 'Create high-converting ads'
    },
    {
      href: '/training/business-leadership',
      title: 'Business Leadership',
      icon: <FaCrown className={styles.dropdownIcon} />,
      description: 'Develop leadership skills'
    }
  ]

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link href='/' className={styles.logoLink}>
            <Image src={logo} width={180} height={40} alt='Photo Studio App Logo' className={styles.logo} />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            <Link href='/about' className={styles.navLink}>
              About
            </Link>
            
            <Link href='/features' className={styles.navLink}>
              Features
            </Link>

            {/* Training Dropdown */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                Training & Education
                <FaChevronDown className={`${styles.chevron} ${showDropdown ? styles.chevronUp : ''}`} />
              </button>
              
              {showDropdown && (
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownHeader}>
                    <h3>Free Training Resources</h3>
                    <p>Grow your photography business with our comprehensive training</p>
                  </div>
                  <div className={styles.dropdownGrid}>
                    {trainingLinks.map((link, index) => (
                      <Link key={index} href={link.href} className={styles.dropdownItem}>
                        {link.icon}
                        <div className={styles.dropdownItemContent}>
                          <h4>{link.title}</h4>
                          <p>{link.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className={styles.dropdownFooter}>
                    <Link href='/training' className={styles.viewAllLink}>
                      View All Training →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href='/refer-a-friend' className={styles.navLink}>
              Refer a Friend
            </Link>
          </div>

          {/* Action Buttons */}
          <div className={styles.navActions}>
            <Link href='https://app.photostudioapp.com/login' className={styles.loginBtn}>
              <FaUser className={styles.btnIcon} />
              Login
            </Link>
            
            <Link href='/get-started' className={styles.ctaBtn}>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}>
          <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <div className={styles.mobileMenuHeader}>
              <Image src={logo} width={150} height={35} alt='Photo Studio App Logo' />
              <button 
                className={styles.mobileCloseBtn}
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className={styles.mobileMenuContent}>
              <Link href='/about' className={styles.mobileNavLink} onClick={closeMobileMenu}>
                About
              </Link>
              
              <Link href='/features' className={styles.mobileNavLink} onClick={closeMobileMenu}>
                Features
              </Link>
              
              

              {/* Mobile Training Section */}
              <div className={styles.mobileTrainingSection}>
                <button 
                  className={styles.mobileDropdownTrigger}
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  Training & Education
                  <FaChevronDown className={`${styles.chevron} ${showDropdown ? styles.chevronUp : ''}`} />
                </button>
                
                {showDropdown && (
                  <div className={styles.mobileDropdownMenu}>
                    {trainingLinks.map((link, index) => (
                      <Link 
                        key={index} 
                        href={link.href} 
                        className={styles.mobileDropdownItem}
                        onClick={closeMobileMenu}
                      >
                        {link.icon}
                        <div>
                          <h4>{link.title}</h4>
                          <p>{link.description}</p>
                        </div>
                      </Link>
                    ))}
                    <Link href='/training' className={styles.mobileViewAllLink} onClick={closeMobileMenu}>
                      View All Training →
                    </Link>
                  </div>
                )}
              </div>

              <Link href='/refer-a-friend' className={styles.mobileNavLink} onClick={closeMobileMenu}>
                Refer a Friend
              </Link>
              <Link href='/tools' className={styles.mobileNavLink} onClick={closeMobileMenu}>
                Tools
              </Link>
            </div>

            <div className={styles.mobileMenuActions}>
              <Link 
                href='https://app.photostudioapp.com/login' 
                className={styles.mobileLoginBtn}
                onClick={closeMobileMenu}
              >
                <FaUser className={styles.btnIcon} />
                Login
              </Link>
              
              <Link 
                href='/get-started' 
                className={styles.mobileCtaBtn}
                onClick={closeMobileMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}