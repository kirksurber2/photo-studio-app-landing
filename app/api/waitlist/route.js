import connectDB from "@/config/database"
import Marketing from '../../../models/marketing'

// POST /api/marketing/waitlist ********************************
export const POST = async (req, res) => {
    if(req.method === "POST")
    try{
        const {email, phone, firstName, lastName, tag} = req.body
        await connectDB()
        
        console.log(req.body)
        if(!email){
            res.status(400).send("An email is required")
        }
        const findEmail =  await Marketing.findOne({email: email})
        if(findEmail) {
            findEmail.tag.push({title: tag, date: Date.now()})
            findEmail.save()
            .then(lead => res.json(lead))
            .catch(err => console.log(err))
        }
        const newLead = new Marketing({email, phone, firstName, lastName, tag})
        newLead.save()
            .then(lead => res.json(lead))
            .catch(err => console.log(err))
       
    }
    catch(error){
        return new Response('Failed to add to waitlist', {status: 500}, error)
    }
    
}

//Signup ****************************************
