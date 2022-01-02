
import React from "react";
import './../index.css';
import user from '../assests/images/user1.jpg';
import book from '../assests/images/book.png';

export function Header({ title,isUser }) {
    return (
        <>
            <div>
                <div className="row d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start m-1">
                    <div className="col-10">
                        <p className="h3" >
                               {isUser && <a href="/user" className="text text-black" style={{textDecoration:'none'}}>
                                <img src={book} type="jpg" alt="User" width="35" height="35" style={{ marginRight: '10px' }} />
                                {title}
                                </a>}
                                {!isUser && <a href="/admin" className="text text-black" style={{textDecoration:'none'}}>
                                <img src={book} type="jpg" alt="User" width="35" height="35" style={{ marginRight: '10px' }} />
                                {title}
                                </a>}
                        </p>
                    </div>
                    <div className="col-2 dropdown text-end">
                        <a href="#" className="tempfordropdown d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-aria-expande="false">
                            <img src={user} type="jpg" alt="User" width="32" height="32" style={{ marginRight: '3px' }} />
                        </a>
                        <ul className="dropdown-menu text-small border border-dark" aria-labelledby="dropdownUser1">
                            <li>
                            {isUser &&  <p className="text text-center h5"> {localStorage.getItem('username')}</p> }
                            {!isUser &&  <p className="text text-center h5"> Admin</p> }
                            </li>
                           { isUser &&
                               <>
                                <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="/profile">My Profile</a>
                            </li>
                               </>
                           }
                            {/* <li>
                                <a className="dropdown-item" href="#"></a>
                            </li> */}
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" onClick={() => { localStorage.removeItem('username') }} href="/" >Sign Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}