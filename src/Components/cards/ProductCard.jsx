import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ prod }) {
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <h4>{prod.title}</h4>
        <img
          src={prod.image}
          alt={prod.title}
          width={150}
          height={150}
          style={{ marginLeft: "20%" }}
        />
        <h2>{prod.price}$</h2>
        <button>Add to card</button>
        <Link to={`products/${prod.id}`}>See More</Link>
      </div>
    </div>
  );
}
