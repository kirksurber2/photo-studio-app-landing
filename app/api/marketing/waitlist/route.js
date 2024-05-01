import mongoose from 'mongoose'
import connectDB from '@/config/database'
import Marketing from '@/models/marketing'


export async function POST(req, res) {
    try {
      await connectDB();
      
      // Assuming the request body is JSON, use req.json() instead of req.formData()
      const userData = await req.json();
  
      // Basic validation checks
      if (userData.test !== '') {
        return new Response(null, {status: 204}); // No content to return
      } else if (!userData.email) {
        return new Response(JSON.stringify({message: "An email is required"}), {status: 400});
      } else if (!userData.firstName || !userData.lastName) {
        return new Response(JSON.stringify({message: "A first and last name is required"}), {status: 400});
      } else if (!userData.phone) {
        return new Response(JSON.stringify({message: "A phone number is required"}), {status: 400});
      }
      
      // Check if the email already exists in the database
      const findEmail = await Marketing.findOne({email: userData.email});
      const findTag = await Marketing.findOne({email: userData.email},{tag:{title: userData.tag.title}})
      if(findEmail && findTag){
        return new Response(JSON.stringify({message:  "You are already signed up"}))
      }
      else if (findEmail && !findTag) {
        // If email exists, add a new tag to the existing document
        findEmail.tag.push({title: userData.tag.title, date: Date.now()});
        await findEmail.save();
        return new Response(JSON.stringify({message: "That email has already been used"}), {status: 400});
      }
  
      // If the email does not exist, create a new document in the database
      const newLead = new Marketing(userData);
      await newLead.save();
  
      // Successfully saved the new lead
      return new Response(JSON.stringify({message: 'Success'}), {status: 200,
        headers: {
          'Access-Control-Allow-Origin': origin,
          
        }
      }
      )
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({message: "Failed to add to waitlist"}), {status: 500});
    }
  }