import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductCard from "./ProductCard";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const DropdownList = ({ category }) => {
  const [productsDrawerOpen, setProductsDrawerOpen] = useState(false);
  const { categoryName, products } = category;

  const toggleProductsDrawer = () => {
    setProductsDrawerOpen(!productsDrawerOpen);
  };
  return (
    <Box
      sx={{
        my: 1,
        backgroundColor: "#F1F4F9",
        border: "1px solid #F2F2F2",
        boxSizing: "border-box",
        overflow: "hidden",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#fff",
          p: 2,
          boxSizing: "border-box",
          border: "1px solid #F2F2F2",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
        onClick={toggleProductsDrawer}
      >
        <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
          {categoryName}
        </Typography>
        {productsDrawerOpen ? (
          <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon />
        )}
      </Grid>

      <Collapse in={productsDrawerOpen}>
        <Box sx={{ p: 1 }}>
          <Grid container spacing={4} rowSpacing={0.2} columnSpacing={1}>
            {products.map((product) => (
              <Grid item xs={6}>
                <ProductCard
                  product={product}
                  tagged={false}
                  key={product.id}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Collapse>
    </Box>
  );
};

export default DropdownList;
