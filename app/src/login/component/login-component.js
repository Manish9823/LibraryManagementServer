import React, { useState } from "react";

export function LoginComponent({ role, callback }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Error, setError] = useState('');


    const check = () => {
        const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let result = res.test(String(username).toLowerCase());

        if (result) {
            callback(username, password);
        }
        else {
            setError('email not valid')
        }

    }


    return (
        <>
            <div clsssName="container">
                <div className="card">
                    <div className="card-header h3 bg-light">
                        {role} Login Page
                    </div>
                    <div className="card-body h6">
                        <div className="m-3">
                            <label className="mb-2">Email</label>
                            <input className="form-control" type="email" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <p className="text text-danger">{Error}</p>
                        </div>
                        <div className="m-3 h6">
                            <label className="mb-2">Password</label>
                            <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="card-footer bg-light">
                        <button className="btn btn-warning" onClick={() =>{check()}}>Login</button>
                        
                    </div>

                </div>
            </div>
        </>

    );
}