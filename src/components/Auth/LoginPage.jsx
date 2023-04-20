import axios from 'axios';
import React from 'react';

export default function LoginPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('/auth/login', Object.fromEntries(new FormData(e.target)));
    if (res.status === 200) {
      window.location = '/leopards';
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
          <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="email" />

        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Password
          <input type="password" name="password" className="form-control" id="exampleFormControlInput1" placeholder="password" />

        </label>
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}
