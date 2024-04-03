const mongoose = require('mongoose')
const Schema = mongoose.Schema


const marketingSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: {
        type: String,
        
    },
    email: {
        type: String, 
        required: true,
        unique: true,
        lowercase: true
    },
    tag: [{
        title: String,
        Date: {
            type: Date,
            default: Date.now()
        }
    }],
    score: {
        type: Number,
        min: 0,
        max: 100
    }, 
    date: Date,
    createdAt: Date,
    authorizing: [{
            sms: {
            type: Boolean,
            default: true,
            },
            email: {
                type: Boolean,
                default: true,
            },
            phoneMessage: {
                type: Boolean,
                default: true,
            },  
        }],
        lastActive: Date,
        emailResponds: [{
            campaignName: String,
            responseType: String,
            date: Date,
        }],
        preferredContact: String,
        referral: [{
            email: String,
            referralEmail: String,
            referralPhone: String
        }]
    
        
}, {timestamps: true} )

module.exports = mongoose.models.Marketing || mongoose.model("Marketing", marketingSchema)
