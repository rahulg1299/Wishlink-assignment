import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./DropdownList.css";
import ProductCard from "./ProductCard";

const DropdownList = ({ category }) => {
  const [productsDrawerOpen, setProductsDrawerOpen] = useState(false);
  const { categoryName, products } = category;

  const toggleProductsDrawer = () => {
    setProductsDrawerOpen(!productsDrawerOpen);
  };
  return (
    <div className="my-2 dropdown-container">
      <div
        className="dropdown-heading d-flex justify-content-between align-items-center"
        onClick={toggleProductsDrawer}
      >
        <p>{categoryName}</p>
        <p>
          {productsDrawerOpen ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </p>
      </div>
      {productsDrawerOpen ? (
        <div className="row p-2 dropdown-list">
          {products.map((product) => (
            <div className="col-6">
              <ProductCard product={product} tagged={false} key={product.id} />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default DropdownList;
