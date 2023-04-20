import React from 'react';

export default function OneLeopard({ leopard, deleteHandler }) {
  return (
    <div className="card mb-3 me-3" style={{ width: '18rem' }}>
      <img src={leopard.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{leopard.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href={`/leopards/${leopard.id}`} className="btn btn-dark">See the leopard</a>

        <button className="btn btn-danger" type="button" onClick={() => deleteHandler(leopard.id)}>Run away</button>

      </div>
    </div>
  );
}
