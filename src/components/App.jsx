import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import MainPage from './MainPage';
import LeopardsPage from './Leopards/LeopardsPage';
import OneLeopard from './Leopards/OneLeopard';
import SignUpPage from './Auth/SignUpPage';
import LoginPage from './Auth/LoginPage';
import PostsPage from './Posts/PostsPage';

export default function App({
  leopards, leopard, user, posts,
}) {
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <div className="container">
      <Navbar user={currentUser} />
      <Routes>
        <Route path="/" element={<MainPage user={currentUser} />} />
        <Route path="/leopards" element={<LeopardsPage leopards={leopards} />} />
        <Route path="/leopards/:id" element={<OneLeopard leopard={leopard} />} />
        <Route path="/user/signup" element={<SignUpPage />} />
        <Route path="/user/login" element={<LoginPage setCurrentUser={setCurrentUser} />} />
        <Route path="/posts" element={<PostsPage posts={posts} user={currentUser} />} />
      </Routes>
    </div>
  );
}
