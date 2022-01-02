import React, { useState } from "react";
import { useNavigate } from "react-router";
import { LoginComponent } from "./component/login-component";
import { checkAdmin, checkUser } from "./service/dataService";


export function Login() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminError, setAdminError] = useState('');
    const [userError, setUserError] = useState('');
    const Navigate=useNavigate();

    const Admin = (username, password) => {
        checkAdmin(username, password,(result)=>{
            if(result.status==="success"){
                localStorage.setItem('username',username);
                Navigate('../admin',{replace:true})
            }
            else{
                setAdminError(result.msg);
            }
        },(err)=>{
            setAdminError(err);
        });
    }

    const User = (username, password) => {
        checkUser(username, password,(result)=>{
            if(result.status==="success"){
                localStorage.setItem('username',username);
                Navigate('../user',{replace:true})
            }
            else{
                setUserError(result.msg);
            }
        },(err)=>{
            setUserError(err);
        });
    }

    return (
        <div className="row d-flex justify-content-center">
            {
                !isAdmin &&
                <div className="col-lg-4 col-md-5 col-sm-9 p-4">
                    <LoginComponent role='User ' callback={(username, password) => User(username, password)} />
                    <p className=" m-2 p-1 text-danger">
                        {userError}
                    </p>
                    <a className="link link-primary" style={{ cursor: 'pointer' }} onClick={() => setIsAdmin(true)}>Admin Login ?</a>
                    <br />
                    <br />
                    <p>New User ? <a className="" href="/registration"> Create an account</a></p>
                </div>


            }

            {
                isAdmin &&
                <div className="col-lg-4 col-md-5 col-sm-9 p-4">
                    <LoginComponent role='Admin' callback={(username, password) => Admin(username, password)} />
                    <p className=" m-2 p-1 text-danger">
                        {adminError}
                    </p>
                    <a className="link link-primary" style={{ cursor: 'pointer' }} onClick={() => setIsAdmin(false)}>User Login ?</a>
                </div>
            }
        </div>
    );
}

