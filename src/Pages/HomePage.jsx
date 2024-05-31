import React, { useContext } from "react";
import Context from "../Store/Index";
import ProductsList from "../Components/ProductsList";

export default function HomePage() {
  const { products, setSortType } = useContext(Context);
  return (
    <div className="home-page">
      <h1 style={{ marginTop: "80px", textAlign: "center" }}>
        Welcome to our store
      </h1>
      <p
        style={{
          width: "40%",
          textAlign: "center",
          marginTop: "60px",
          marginLeft: "450px",
        }}
      >
        Explore our wide range of the latest fashion trends and styles. Whether
        you're looking for casual or elegant attire for a special occasion,
        we've got you covered. Shop now and elevate your wardrobe with our
        curated collection!
      </p>

      <ProductsList prods={products} setSortType={setSortType} />
    </div>
  );
}
