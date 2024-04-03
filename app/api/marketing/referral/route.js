// POST REFERRAL *****************************
import connectDB from "@/config/database"
import Marketing from '../../../../models/marketing'


export const POST = async(request) => {
    const {referralEmail, referralPhone, email} = req.body
    try{
        await connectDB()
        if(!email || !referralEmail || !referralPhone){
            res.status(400).send("An email or phone is required")
        }
        const findEmail =  await Marketing.findOne({email: email}, )
        const findReferral = await Marketing.findOne({'referral.referralEmail': referralEmail}, {'referral.referralPhone': referralPhone}, {email: referralEmail}, {phone: referralPhone})
        if(!findEmail){
            res.status(403).send("The referring person needs to sign up")
        }
        else if(findReferral){
            res.status(403).send("That referral has already been submitted or already signed up")
            return
        }
        else if(findEmail && !findReferral) {
            findEmail.referral.push({email: email, referralEmail: referralEmail, referralPhone: referralPhone})
            findEmail.save()
            res.status(201).send('The referral has been created')
        }
       
    }
    catch(error){
        console.log(error)
    }
}
