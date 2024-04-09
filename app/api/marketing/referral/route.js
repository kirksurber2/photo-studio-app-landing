// POST REFERRAL *****************************
import connectDB from "@/config/database"
import Marketing from '../../../../models/marketing'


export const POST = async(req) => {
    try{
        await connectDB()
        const referral = await req.json()
        console.log(JSON.stringify(referral))
        if(referral.address !==""){
                return new Response(JSON.stringify({message: 'Thank you'}), {status: 400})
            
            
        }
        if(!referral.email || !referral.referralEmail || !referral.referralPhone){
            return new Response(JSON.stringify({message: "An email or phone is required"}), {status: 400})
            
        }
        const findEmail =  await Marketing.findOne({email: referral.email}, )
        const findReferral = await Marketing.findOne({'referral.referralEmail': referral.referralEmail}, {'referral.referralPhone': referral.referralPhone}, {'referall.email': referral.referralEmail}, {'referral.phone': referral.referralPhone})
             if(!findEmail){
                 return new Response(JSON.stringify({message: "Your name is not in our system to get the referral bonus.  You need to sign-up"}), {status: 400})
              }
              else if(findReferral){
                  return new Response(JSON.stringify({message: 'That referral has alredy been submitted or already signed up'}), {status: 403})
              }
              else if(findEmail && !findReferral) {
                  findEmail.referral.push({email: referral.email, referralEmail: referral.referralEmail, referralPhone: referral.referralPhone})
                  await findEmail.save()
                  return new Response(JSON.stringify({message: 'The referral has been created'}), {status: 201})
              }
            return new Response(JSON.stringify(referral), {status: 200})
    }
       
    // }
    catch(error){
        console.error(error);
        return new Response(JSON.stringify({message: "Failed to add referral"}), {status: 500});
    }
}
