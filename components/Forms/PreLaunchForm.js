'use client'
import styles from './PreLaunchForm.module.css'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'


function PreLaunchForm(props) {
    const navigation =useRouter()
    const [mounted, setMounted] = useState(false)
    const [user, setUser] = useState ({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        tag: {title: "Pre-Launch waitlist"}, 
        test: ""
        
    })
    const [error, setError] = useState([])
    function handleFormChange(e) {
        setUser(prevUser => ({...prevUser, [e.target.name]: e.target.value}))
        
    }
    async function handleSubmit(e)  {
        e.preventDefault()
        
     try{
         const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/marketing/waitlist`, {
             method: "POST",
             headers: {"Content-Type": 'application/json'},
             body: JSON.stringify(user)
            })
            
            if(!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`)
            }
            console.log("Form Submitted Successfully")
            navigation.push('/pre-launch-special')
        }
        catch(error){
            console.error('Error submitting the form:', error.message)
        }
    }
   
    
    useEffect(() => {
        setMounted(true)
    },[])


    return ( mounted && (
        <div className={styles.form}>
            <form onSubmit={handleSubmit} method='POST'>
                <input 
                type="text"
                name="firstName"
                placeholder='First Name'
                onChange={handleFormChange}
                value={user.firstName}>

                </input>
                <input 
                type="text"
                name="lastName"
                placeholder='Last Name'
                onChange={handleFormChange}
                value={user.lastName}>

                </input>
                <input 
                type="tel"
                name="phone"
                placeholder='Phone'
                onChange={handleFormChange}
                value={user.phone}>

                </input>
                <input 
                type="email"
                name="email"
                placeholder='Email'
                onChange={handleFormChange}
                value={user.email}>

                </input>
                
                <input 
                type="text"
                name="tag"
                placeholder='tag'
                onChange={handleFormChange}
                value={user.tag}
                hidden={true}
                
                >
                </input>
                <input 
                type="text"
                name="test"
                placeholder='test'
                onChange={handleFormChange}
                value={user.test}
                hidden={true}
                >
                </input>
                <div className={styles.errorMessages}>
                    <div>{error}</div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
)   
}

export default PreLaunchForm