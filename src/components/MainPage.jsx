import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function MainPage({ user }) {
  const [fact, setFact] = useState('');

  // useEffect(() => {
  //   axios('http://localhost:5555/api/posts').then(({ data }) => console.log(data));
  // }, []);

  useEffect(() => {
    axios('/api/dogfacts').then(({ data }) => setFact(data));
  }, []);

  return (
    <>
      <div>{`Hello, ${user?.username || 'stranger'}`}</div>
      <br />
      <div>{fact}</div>
    </>
  );
}

// https://dog-api.kinduff.com/api/facts?number=1
