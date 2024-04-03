const apiDomain = process.env.NEXTAUTH_URL || null

//fetch all Company Clients
async function fetchCompanyClients() {
    try {
        if(!apiDomain) {
            return []
        }
        const res = await fetch(`${apiDomain}/clients`)
        // if(user.company_id ! === company_id) {
        //     throw new Error('These are not your clients')
        // }
        if(!res.ok) {
            throw new Error("Failed to get clients")
        }
        return res.json()
    }
    catch(error) {
        console.log(error)
        return []
    }
}

// FETCH single Client
async function fetchClient(id) {
    try {
        if(!apiDomain) {
            return null
        }
        const res = await fetch(`${apiDomain}/clients/${id}`)
        
        if(!res.ok){
            throw new Error('Failed to get client')
        }
        //  if(user.company_id !== res.company_id) {
        //     throw new Error('You are not authorized to view that client')
        // }
        return await res.status(200).json()
    }
    catch(error) {
    console.log(error)
    return null
    }
}

export {  fetchClient, fetchCompanyClients }