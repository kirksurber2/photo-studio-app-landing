const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    company_id: {
        type:  Schema.Types.ObjectId,
        ref: "Company",
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true, 
        minLength: [12, "Password must be at least 12 characters long"],
        trim: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },    
    firstName: {
        type: String,
        required: true,
        trim: true        
        },
    lastName: {
           type: String,
           required: true,
           trim: true        
        },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
        lowercase: true,
        trim: true
    },
    active: Boolean,
    userType: String,
    pin: Number,
    profileImg: String,
    permissions: {
        type: String,
        
    },
    marketingType: String,
    toDo: [{
        type: String,
        timestamps: true,
        dueDate: Date,
        isComplete: Boolean
    }]
    
}, {timestamps: true})

module.exports = mongoose.model("Users", userSchema)

