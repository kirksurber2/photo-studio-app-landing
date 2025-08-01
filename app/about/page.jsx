import Navbar from '../components/Navbars/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import styles from './about.module.css'
import kirkSurberHeadshot from '../../assets/images/images/KSheadshot.jpg'
import { MdTimelapse } from "react-icons/md"
import { FaLayerGroup, FaCamera, FaHeart, FaMedal, FaGraduationCap, FaUsers, FaRocket, FaLightbulb } from "react-icons/fa"
import { BsLightningChargeFill } from "react-icons/bs"

export const metadata = {
    title: 'About Photo Studio App | Built by Photographers for Photographers',
    keywords: 'Photo Studio App, About, Photography CRM, Photographer Tools, Kirk Surber',
    description: 'Learn about Photo Studio App - a comprehensive client management platform built by photographers who understand the unique challenges of running a photography business.'
}

export default function About() {
    const values = [
        {
            icon: <MdTimelapse className={styles.valueIcon} />,
            title: "Save Time",
            description: "As photographers, time is money. Get the info you need instantly, when you need it most."
        },
        {
            icon: <FaLayerGroup className={styles.valueIcon} />,
            title: "Keep it Together",
            description: "One powerful platform replaces 17+ apps. Everything you need in a single, cohesive suite."
        },
        {
            icon: <BsLightningChargeFill className={styles.valueIcon} />,
            title: "Find it Fast",
            description: "Sessions, sales, and edits at your fingertips. No more digging through mixed-up information."
        }
    ]

    const pillars = [
        {
            icon: <FaRocket className={styles.pillarIcon} />,
            title: "Mission",
            description: "Create an intuitive app for photographers who run sessions and sales, giving them more time to market their business instead of wrestling with complicated tools.",
            highlight: "Simple, easy to use, intuitive"
        },
        {
            icon: <FaLightbulb className={styles.pillarIcon} />,
            title: "Vision",
            description: "To be the go-to platform that empowers photographers to focus on their craft and grow their business, not manage multiple disconnected tools.",
            highlight: "Empowering creative entrepreneurs"
        },
        {
            icon: <FaGraduationCap className={styles.pillarIcon} />,
            title: "Education",
            description: "The veteran in me is a trainer at heart. Expect educational videos, conferences, and meetups covering everything from shooting techniques to ad campaigns.",
            highlight: "Never stop learning"
        }
    ]

    const stats = [
        { number: "15+", label: "Years Photography Experience" },
        { number: "1000+", label: "Sessions Managed" },
        { number: "100%", label: "Veteran Owned" },
        { number: "24/7", label: "Passion Driven" }
    ]

    return (
        <div className={styles.aboutPage}>
            <Navbar />
            
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <h1 className={styles.heroTitle}>
                                Built by Photographers,
                                <span className={styles.highlight}> for Photographers</span>
                            </h1>
                            <p className={styles.heroDescription}>
                                Your time should be spent creating amazing images and growing your business, 
                                not juggling multiple apps and complicated workflows.
                            </p>
                            <div className={styles.heroButtons}>
                                <Link href="/get-started" className={`${styles.btn} ${styles.primary}`}>
                                    Start Your Journey
                                </Link>
                                <Link href="/training" className={`${styles.btn} ${styles.secondary}`}>
                                    Free Training
                                </Link>
                            </div>
                            
                            {/* Stats */}
                            <div className={styles.heroStats}>
                                {stats.map((stat, index) => (
                                    <div key={index} className={styles.stat}>
                                        <span className={styles.statNumber}>{stat.number}</span>
                                        <span className={styles.statLabel}>{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className={styles.heroVisual}>
                            <div className={styles.heroImageContainer}>
                                <Image 
                                    src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Professional photographer at work"
                                    width={500}
                                    height={600}
                                    className={styles.heroImage}
                                />
                                <div className={styles.floatingBadge}>
                                    <FaMedal className={styles.badgeIcon} />
                                    <span>Veteran Owned</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className={styles.valuesSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Why Choose Photo Studio App?</h2>
                        <p className={styles.sectionDescription}>
                            We understand the unique challenges photographers face because we are photographers too.
                        </p>
                    </div>
                    
                    <div className={styles.valuesGrid}>
                        {values.map((value, index) => (
                            <div key={index} className={styles.valueCard}>
                                <div className={styles.valueIconContainer}>
                                    {value.icon}
                                </div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className={styles.storySection}>
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <div className={styles.storyBadge}>
                                <FaCamera className={styles.storyBadgeIcon} />
                                <span>Our Story</span>
                            </div>
                            <h2 className={styles.storyTitle}>We're Photographers Too!</h2>
                            <p className={styles.storyDescription}>
                                As a photographer myself, the biggest challenge I faced was managing client information 
                                across multiple platforms. Finding session details, tracking sales progress, and keeping 
                                everything organized was eating into my creative time.
                            </p>
                            <p className={styles.storyDescription}>
                                I needed simplicity. We all have a million tasks to accomplish – dealing with complicated 
                                apps shouldn't be one of them. That's why Photo Studio App was born from real-world 
                                photography business needs.
                            </p>
                            <div className={styles.storyHighlight}>
                                <FaHeart className={styles.heartIcon} />
                                <span>Built with passion, tested in the field</span>
                            </div>
                        </div>
                        
                        <div className={styles.storyVisual}>
                            <div className={styles.teamPhotoContainer}>
                                <div className={styles.teamPhoto}>
                                    <FaUsers className={styles.teamIcon} />
                                    <h4>We're Building Our Dream Team!</h4>
                                    <p>Join us in revolutionizing how photographers manage their business</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillars Section */}
            <section className={styles.pillarsSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Foundation</h2>
                        <p className={styles.sectionDescription}>
                            The core principles that drive everything we do
                        </p>
                    </div>
                    
                    <div className={styles.pillarsGrid}>
                        {pillars.map((pillar, index) => (
                            <div key={index} className={styles.pillarCard}>
                                <div className={styles.pillarHeader}>
                                    {pillar.icon}
                                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                                </div>
                                <p className={styles.pillarDescription}>{pillar.description}</p>
                                <div className={styles.pillarHighlight}>
                                    <strong>{pillar.highlight}</strong>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className={styles.founderSection}>
                <div className={styles.container}>
                    <div className={styles.founderContent}>
                        <div className={styles.founderImageContainer}>
                            <Image 
                                alt='Kirk Surber - Founder & CEO' 
                                src={kirkSurberHeadshot} 
                                width={300} 
                                height={300}
                                className={styles.founderImage}
                            />
                            <div className={styles.founderBadges}>
                                <div className={styles.badge}>
                                    <FaMedal className={styles.badgeIcon} />
                                    <span>Veteran</span>
                                </div>
                                <div className={styles.badge}>
                                    <FaCamera className={styles.badgeIcon} />
                                    <span>Photographer</span>
                                </div>
                                <div className={styles.badge}>
                                    <FaHeart className={styles.badgeIcon} />
                                    <span>Dad</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.founderText}>
                            <div className={styles.founderHeader}>
                                <h2 className={styles.founderTitle}>Meet Kirk Surber</h2>
                                <p className={styles.founderSubtitle}>Founder, CEO & Lead Photographer</p>
                            </div>
                            
                            <div className={styles.founderStory}>
                                <p>
                                    I built Photo Studio App to solve my own photography business challenges. After years of 
                                    juggling multiple applications and dealing with generic CRM systems that didn't understand 
                                    photographers' unique needs, I knew there had to be a better way.
                                </p>
                                <p>
                                    As a veteran, I bring discipline and attention to detail to everything I do. As a dad, 
                                    I understand the importance of efficiency and making every moment count. As a photographer, 
                                    I know firsthand the pain points that keep us from focusing on what we love most – creating 
                                    beautiful images.
                                </p>
                                <p>
                                    Photo Studio App isn't just another business tool – it's a photographer's best friend, 
                                    designed by someone who lives and breathes this industry every day.
                                </p>
                            </div>
                            
                            <div className={styles.founderQuote}>
                                <blockquote>
                                    "Every feature in Photo Studio App was born from a real frustration I experienced 
                                    in my own photography business. We're not just building software – we're solving 
                                    real problems for real photographers."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>Ready to Transform Your Photography Business?</h2>
                        <p className={styles.ctaDescription}>
                            Join hundreds of photographers who are already simplifying their workflow and growing their business
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/get-started" className={`${styles.btn} ${styles.primary} ${styles.large}`}>
                                Get Started Free
                            </Link>
                            <Link href="/training" className={`${styles.btn} ${styles.secondary} ${styles.large}`}>
                                Explore Free Training
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}