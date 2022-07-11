import React from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import "./ProductsPage.css";
import DropdownList from "./DropdownList";

const ProductsPage = (props) => {
  const { taggedProducts, otherProducts } = props;

  return (
    <div className="w-100 m-0 products-page-container">
      <div className="px-3 py-3 tagged-products-container">
        <h3>Tagged Products ({taggedProducts.length})</h3>
        <div className="px-2 row">
          {taggedProducts.length > 0 &&
            taggedProducts.map((product) => (
              <div className="col-6 px-1">
                <ProductCard product={product} tagged={true} key={product.id} />
              </div>
            ))}
        </div>
      </div>
      <div className="px-3 py-3 mt-2 complete-look-container">
        <h3>Complete My look</h3>
        <div>
          {otherProducts.length > 0 &&
            otherProducts.map((category) => (
              <DropdownList category={category} key={category.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    videos: state.dashboard.videos,
    taggedProducts: state.dashboard.taggedProducts,
    otherProducts: state.dashboard.otherProducts,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(ProductsPage);
