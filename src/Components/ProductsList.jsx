import React from "react";
import ProductCard from "./cards/ProductCard";

export default function ProductsList({ prods, setSortType }) {
  const changetoAsc = () => {
    setSortType("asc");
  };
  const changetoDesc = () => {
    setSortType("desc");
  };
  return (
    <div className="products-container">
      <div className="button-container">
        <button className="sort-button" onClick={changetoAsc}>
          Change To ASC
        </button>
        <button className="sort-button" onClick={changetoDesc}>
          Change To DESC
        </button>
      </div>
      <h1 className="title">Products</h1>
      <div className="product-cards">
        {prods.map((prod, index) => (
          <ProductCard key={index} prod={prod} />
        ))}
      </div>
    </div>
  );
}
