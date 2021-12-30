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
        let str = checkAdmin(username, password);
        setAdminError(str.msg);
        if(str.status==="success"){
            Navigate('../admin',{replace:true})
        }
    }

    const User = (username, password) => {
        let str = checkUser(username, password);
        setUserError(str.msg);
        if(str.status==="success"){
            localStorage.setItem('username',username);
            Navigate('../user',{replace:true})
        }
    }

    return (
        <div className="row d-flex justify-content-center">
            {
                !isAdmin &&
                <div className="col-lg-4 col-md-5 col-sm-9 p-4">
                    <LoginComponent role='User ' callback={(username, password) => User(username, password)} />
                    <div className=" m-2 p-1">
                        {userError}
                    </div>
                    <a className="link link-primary" style={{ cursor: 'pointer' }} onClick={() => setIsAdmin(true)}>Admin Login ?</a>
                </div>
            }

            {
                isAdmin &&
                <div className="col-lg-4 col-md-5 col-sm-9 p-4">
                    <LoginComponent role='Admin' callback={(username, password) => Admin(username, password)} />
                    <div className=" m-2 p-1">
                        {adminError}
                    </div>
                    <a className="link link-primary" style={{ cursor: 'pointer' }} onClick={() => setIsAdmin(false)}>User Login ?</a>
                </div>
            }
        </div>
    );
}

