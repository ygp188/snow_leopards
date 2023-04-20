import React, { useState } from 'react';

export default function LeopardForm({ setAllLeopards }) {
  const [input, setInput] = useState({ name: '', img: '' });

  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/leopards/addLeopard', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(input),
    });
    const data = await response.json();
    setAllLeopards((prev) => [data, ...prev]);
    setInput({ name: '', img: '' });
  };

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
          <input
            name="name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name..."
            value={input.name}
            onChange={changeHandler}
          />
        </label>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Image
          <input
            name="img"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="image..."
            value={input.img}
            onChange={changeHandler}
          />
        </label>
        <button className="btn btn-info" type="submit">Add a leopard</button>
      </div>
    </form>
  );
}
