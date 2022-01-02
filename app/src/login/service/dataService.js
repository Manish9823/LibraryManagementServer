const url='http://localhost:3030';


export function checkAdmin(username,password,success,failure){

    const xhr=new XMLHttpRequest();
    xhr.open('GET',`${url}/login?role=admin&username=${username}&password=${password}`,true);
    xhr.onload=()=>{
        if(xhr.status===200){
            success(JSON.parse(xhr.responseText));
        }
        else{
            failure({msg:'server Error'});
        }
    }
    xhr.send();


    
    // return {status:"failed", msg:"Authentication Failed"};
}


export function checkUser(username,password,success,failure){
    const xhr=new XMLHttpRequest();
    xhr.open('GET',`${url}/login?role=user&username=${username}&password=${password}`,true);
    xhr.onload=()=>{
        if(xhr.status===200){
            success(JSON.parse(xhr.responseText));
        }
        else{
            failure({msg:'server Error'});
        }
    }
    xhr.send();

    // return {status:"failed", msg:"Authentication Failed"};
}