'use client'
import { useState } from 'react'
import styles from './RefferalForm.module.css'




export default function ReferralForm() {

    const [referral, setReferral] = useState({
        email: "", referralEmail: "", referralPhone: ""
    })
    const [address, setAddress] = useState('')
    const [errors, setErrors] = useState('')

    function handleChange(e) {
        setReferral(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    function handleReferralSubmit(e) {
        e.preventDefault()
        if(address !== "") {
            navigate('/')
        }
    }


    return(
        <div>
        <form onSubmit={handleReferralSubmit} className={styles.form}>
            <input 
                type='email'
                placeholder='Friends Email'
                name='referralEmail'
                value={referral.referralEmail}
                required={true}
                onChange={handleChange}
            
            ></input>
            <input 
                type='tel'
                placeholder='Friends Phone (verification only)'
                name='referralPhone'
                value={referral.referralPhone}
                required={true}
                onChange={handleChange}
            
            ></input>
            <input 
                type='email'
                placeholder='Your Email'
                name='email'
                value={referral.email}
                required={true}
                onChange={handleChange}
            
            ></input>
            <input 
                type='text'
                placeholder='Address'
                name='Address'
                value={address}
                hidden={true}
                onChange={(e) => setAddress(e.target.value)}
            
            ></input>
            <button>Submit</button>
        </form>
          {errors !== "" &&
            <p>{errors}</p>
          }
            
        </div>

    )
 }