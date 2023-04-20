import React, { useState } from 'react';
import LeopardForm from './LeopardForm';
import OneLeopard from './OneLeopard';

export default function LeopardsPage({ leopards }) {
  const [allLeopards, setAllLeopards] = useState(leopards);

  const deleteHandler = async (id) => {
    await fetch(`/api/leopards/delete/${id}`, { method: 'POST' });
    setAllLeopards((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <>
      <LeopardForm setAllLeopards={setAllLeopards} />
      <div className="row">{allLeopards?.map((el) => <OneLeopard key={el.id} leopard={el} deleteHandler={deleteHandler} />)}</div>
    </>
  );
}
