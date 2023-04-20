import axios from 'axios';
import React from 'react';

export default function Navbar({ user }) {
  const clickHandler = async () => {
    const res = await axios('/auth/logout');
    if (res.status === 200) {
      window.location = '/';
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/leopards">Leopards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/posts">Posts</a>
            </li>
            {!user && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/user/signup">Sign Up</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/user/login">Login</a>
                </li>
              </>
            )}
            {user && <li className="nav-item"><button type="button" onClick={clickHandler}>Logout</button></li>}
          </ul>
        </div>
      </div>
    </nav>
  );
}
