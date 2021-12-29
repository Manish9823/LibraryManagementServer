
const Admin=[
    {
        username:'admin',
        password:'admin'
    }
]
const User=[
    {
        username:'user',
        password:'user'
    }
]


export function checkAdmin(username,password){
    for(let user of Admin){
        if(user.username===username){
            if(user.password===password){
                return {status:"success",msg:"Authentication Successfully"} 
            }
            else{
                return {status:"failed",msg:"Password not Match"} 
            }
        }
    }
    return {status:"failed", msg:"Authentication Failed"};
}


export function checkUser(username,password){
    for(let user of User){
        if(user.username===username){
            if(user.password===password){
                return {status:"success",msg:"Authentication Successfully"} 
            }
            else{
                return {status:"failed",msg:"Password not Match"} 
            }
        }
    }
    return {status:"failed", msg:"Authentication Failed"};
}