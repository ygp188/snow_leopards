import axios from 'axios';
import React, { useState } from 'react';

export default function OnePost({
  post, deleteHandler, user, setAllPosts,
}) {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState({ title: post.title, body: post.body });

  const changeHandler = (event) => {
    setInput((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const clickHandler = async () => {
    const { data } = await axios.patch(`/api/posts/${post.id}`, input);
    setAllPosts((prev) => prev.map((el) => {
      if (el.id === post.id) {
        return data;
      }
      return el;
    }));
    setShowInput(false);
  };

  return (
    <div className="card mb-3 me-3" style={{ width: '18rem' }}>
      <div className="card-body">
        {showInput ? (
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="title..."
            value={input.title}
            onChange={changeHandler}
          />
        ) : <h5 className="card-title">{post.title}</h5>}
        {showInput ? (
          <input
            name="body"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="body..."
            value={input.body}
            onChange={changeHandler}
          />
        ) : <p className="card-text">{post.body}</p>}
        {showInput && <button type="button" onClick={clickHandler}>Save</button>}

        {user.id === post.user_id && <button className="btn btn-danger" type="button" onClick={() => deleteHandler(post.id)}>Delete</button>}
        {user.id === post.user_id && <button type="button" onClick={() => setShowInput((prev) => !prev)}>Edit</button>}

      </div>
    </div>
  );
}
