import React from "react";
import Products from "./Products";
import productSets from "../../data/Products.json";
const ProductsHome = ({ type }) => {
  return <Products products={productSets[type] || []} />;
};

export default ProductsHome;
