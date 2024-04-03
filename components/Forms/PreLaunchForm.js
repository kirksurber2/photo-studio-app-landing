'use client'
import styles from './PreLaunchForm.module.css'
import { useState } from 'react'
import axios from 'axios'

function PreLaunchForm(props) {

    const [user, setUser] = useState ({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        tag:{title: "Pre-Launch waitlist"}, 
        test: ""
        
    }
    )
    function handleFormChange(e) {
        setUser(prevUser => ({...prevUser, [e.target.name]: e.target.value}))
        
    }
    async function handleSubmit(req, res) {
        e.preventDefault();
        try {
            const response = await axios.post('/api/waitlist', {
              headers: {
                'Content-Type': 'application/json',
              },
            });
        
            
            console.log(response.data)
            res.status(200).json(response.data)
          } 
          catch (error) {
            // Handle network errors
            console.error('Network error:', error);
          }
        }
    
    
 


    return (
        <div className={styles.form}>
            <form  onSubmit={handleSubmit}>
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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PreLaunchForm