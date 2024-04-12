'use client'
import { useState } from 'react'
import styles from './RefferalForm.module.css'
import { useRouter } from 'next/navigation'



export default function ReferralForm() {
    const navigation = useRouter()
    const [referral, setReferral] = useState({
        email: "", referralEmail: "", referralPhone: "", address: ""
    })
    
    const [errors, setErrors] = useState('')

    function handleChange(e) {
        setReferral(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    async function handleReferralSubmit(e) {
        e.preventDefault();
        
        try {
            const res = await fetch(`${process.env.URL}/api/marketing/referral`, {
                method: "POST",
                headers: { "Content-Type": 'application/json' },
                body: JSON.stringify(referral)
            });
            console.log(res)
            if (!res.ok) {
                const errorBody = await res.json(); // Assuming the server sends back a JSON with error details
                throw new Error(`HTTP error! status: ${res.status}, Message: ${errorBody.message}`);
            }
    
            console.log("Form Submitted Successfully");
            navigation.push('/thank-you'); // Fixed router usage
        } catch (error) {
            console.error('Error submitting the form:', error.message);
            setErrors(error.message); // Assuming you want to display errors to the user
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
                name='address'
                value={referral.address}
                hidden={true}
                onChange={handleChange}
            
            ></input>
            <button>Submit</button>
        </form>
          {errors !== "" &&
            <p className={styles.errors}>{errors}</p>
          }
            
        </div>

    )
 }