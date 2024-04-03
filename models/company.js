const mongoose = require("mongoose")
const Schema = mongoose.Schema
const sessionsSchema = require('./sessions')

const companySchema = new Schema({
    companyName: {
        type: String,
        
        
    },
    phone: {
        type: String
        
    },
    email: {
        type: String,
        lowercase: true
    },
    address: {
        street: {
            type: String,  
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zip: {
            type: Number,
        }
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
    }],
    active: Boolean,
    logoImg: String,
    sessionTypes: [{
        title: String,
        workflowSteps: [{
            title: String,
            dueDate: Date,
        }]
}],
    sessions: [{
        session: {type: mongoose.Schema.ObjectId, ref: 'Users'}
    }], 
    smsReminders: [{
        smsName: String,
        smsSessionType: String,
        clientNumber: Number,
        message: String
    }],
    emailReminders: [{
        title: String,
        subject: String,
        body: String
    }],
    subscriptionCreated: {
        type: Boolean,
        default: false
    },
    paymentIntentSucceded: {
        type: Boolean,
        default: false
    },
    clients: [{
        client: {type: mongoose.Schema.ObjectId, ref: 'Clients'}
    }],
    workflow: [{
        title: String,
        steps: [{
            name: String,
            dueAfterLastStep: Date,
            dueAfterSession: Date,
            lastUpdate: Date,
            sendEmailNotification: {
                type: Boolean,
                default: false,
                emailNotification_id: String,
                dayPriorNotification: new Date() - 24*60*60*1000,
                weekPriorAlert: new Date() - 7*24*60*60*1000,
                OneHrAlert: new Date() - 60*60*1000
            },
            sendSMSNotifcation: {
                type: Boolean,
                default: false,
                smsNotification_id: String,
                dayPriorNotification: new Date() - 24*60*60*1000,
                weekPriorAlert: new Date() - 7*24*60*60*1000,
                OneHrAlert: new Date() - 60*60*1000
            },
            
            isComplete: {
                type: Boolean,
                default: false
            },
            alertWhen: {
                type: Date,
                default: new Date() - 7*24*60*60*1000
             },
        }]
    }]

}, {timestamps: true})

module.exports = mongoose.model("Company", companySchema)