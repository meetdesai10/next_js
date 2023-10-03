"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  let [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      setProduct(data.products);
    }
    fetchdata();
  });
  return (
    <div>
      <table border={1} rules="all" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Phone Name</th>
            <th>Discription</th>
            <th>Price</th>
            <th>Discount</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, i) => {
            return (
              <tr key={i}>
                <th>{item.title}</th>
                <th>{item.description}</th>
                <th>{item.price}</th>
                <th>{item.discountPercentage}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
