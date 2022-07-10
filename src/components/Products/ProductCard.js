import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";

const ProductCard = ({ product, tagged }) => {
  const { name, img, description, oldPrice, discount, newPrice } = product;

  return (
    <Card className="product-card my-2 pb-2" sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      {/* <div className="product-offer-label w-50">
        {product.discount ? "offer" : ""}
      </div> */}
      <CardContent>
        <Typography sx={{fontFamily: 'Poppins'}} gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography
          sx={{ lineHeight: 1.1, color: '#333333', fontFamily: 'Poppins' }}
          gutterBottom
          variant="body2"
          color="text.secondary"
          component="div"
        >
          {description}
        </Typography>
        <Box className="d-flex flex-wrap align-items-center" sx={{ fontSize: "11px", fontFamily: 'Poppins' }}>
          <Typography
            sx={{ color: "#999999", textDecoration: "line-through", fontFamily: 'Poppins'}}
            className="me-2"
            variant="body2"
          >
            &#x20B9; {oldPrice}
          </Typography>
          <Typography sx={{ color: "#DD5F2D", fontFamily: 'Poppins' }} variant="body2">
            ({discount} OFF)
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 500, fontFamily: 'Poppins' }} variant="subtitle1">
          &#x20B9; {newPrice}
        </Typography>
      </CardContent>
      {tagged ? (
        <CardActions className="d-flex justify-content-center px-3">
          <button className="product-shop-button w-100 btn">Shop Now</button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default ProductCard;
