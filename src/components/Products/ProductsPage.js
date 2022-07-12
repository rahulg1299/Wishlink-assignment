import React from "react";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import DropdownList from "./DropdownList";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const ProductsPage = (props) => {
  const { taggedProducts, otherProducts } = props;

  return (
    <Box
      sx={{
        backgroundColor: "#F1F4F9",
        overflow: "hidden",
        fontFamily: "Poppins",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      <Box sx={{ p: 2, backgroundColor: "#fff" }}>
        <Typography
          sx={{ color: "#333333", fontFamily: "Poppins", fontWeight: 700 }}
          variant="h5"
        >
          Tagged Products ({taggedProducts.length})
        </Typography>
        <Grid container spacing={1.5} rowSpacing={0.1}>
          {taggedProducts.length > 0 &&
            taggedProducts.map((product) => (
              <Grid item xs={6}>
                <ProductCard product={product} tagged={true} key={product.id} />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Box sx={{ p: 2, mt: 1, backgroundColor: "#fff" }}>
        <Typography
          sx={{ color: "#333333", fontFamily: "Poppins", fontWeight: 700 }}
          variant="h5"
        >
          Complete my look
        </Typography>
        <Box>
          {otherProducts.length > 0 &&
            otherProducts.map((category) => (
              <DropdownList category={category} key={category.id} />
            ))}
        </Box>
      </Box>
    </Box>
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
