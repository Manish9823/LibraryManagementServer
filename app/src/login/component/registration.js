
import React, { useState } from "react";
import { useNavigate } from "react-router";

export function Registration() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [Error, setError] = useState('');
    const Navigate=useNavigate();


    const register = () => {

        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result= res.test(String(username).toLowerCase());

        if(result){
            if (password === confirmPassword) {
                let str = addUser(username, password);
                if(str.status==="success"){
                    localStorage.setItem('username',username);
                    Navigate('../user',{replace:true})
                }
            }
            else {
                setError('Password not Match...');
            }
        }
        else{
            setError('Email not valid')
        }
       
    }

    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-5 col-sm-9 p-4">
                    <div clsssName="container">
                        <div className="card">
                            {/* <form> */}
                            <div className="card-header h3 bg-light">
                                New Registration form
                            </div>
                            <div className="card-body h6">
                                <div className="m-3">
                                    <label className="mb-2">Email</label>
                                    <input required className="form-control" type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="m-3 h6">
                                    <label className="mb-2">Password</label>
                                    <input required className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="m-3 h6">
                                    <label className="mb-2">Confirm Password</label>
                                    <input required className="form-control" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className="card-footer bg-light">
                                <button className="btn btn-success" onClick={() => register()}>Register</button>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>

                    <div className=" m-2 p-1 h5 text-danger">
                        {Error}
                    </div>
                    <p>Already have an account? <a className="link link-primary" href="/"> Login</a> </p>
                </div>
            </div>
        </>

    );
}