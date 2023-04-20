import React, { useState } from 'react';
import PostForm from './PostsForm';
import OnePost from './OnePost';

export default function PostsPage({ posts, user }) {
  const [allPosts, setAllPosts] = useState(posts);

  const deleteHandler = async (id) => {
    await fetch(`/api/posts/${id}`, { method: 'DELETE' });
    setAllPosts((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user ? (
        <>
          <PostForm setAllPosts={setAllPosts} />
          <div className="row">
            {allPosts?.map((el) => (
              <OnePost
                key={el.id}
                post={el}
                deleteHandler={deleteHandler}
                user={user}
                setAllPosts={setAllPosts}
              />
            ))}

          </div>
        </>
      ) : <div>Товарищ барс, залогиньтесь!</div>}
    </>
  );
}
