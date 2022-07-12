import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductCard = ({ product, tagged }) => {
  const { name, img, description, oldPrice, discount, newPrice } = product;

  return (
    <Card
      sx={{
        maxWidth: 345,
        position: "relative",
        zIndex: 10,
        overflow: "visible",
        my: 1,
        pb: 1,
      }}
    >
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography
          sx={{ lineHeight: 1.1, color: "#333333", fontFamily: "Poppins" }}
          gutterBottom
          variant="body2"
          color="text.secondary"
          component="div"
        >
          {description}
        </Typography>
        <Box
          className="d-flex flex-wrap align-items-center"
          sx={{ fontSize: "11px", fontFamily: "Poppins" }}
        >
          <Typography
            sx={{
              color: "#999999",
              textDecoration: "line-through",
              fontFamily: "Poppins",
            }}
            className="me-2"
            variant="body2"
          >
            &#x20B9; {oldPrice}
          </Typography>
          <Typography sx={{ color: "#DD5F2D" }} variant="body2">
            ({discount} OFF)
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 500 }} variant="subtitle1">
          &#x20B9; {newPrice}
        </Typography>
      </CardContent>
      {tagged ? (
        <CardActions sx={{ display: "flex", justifyContent: "center", px: 2 }}>
          <Button
            sx={{
              borderRadius: "50px",
              backgroundColor: "#021927",
              color: "#fff",
              width: "100%",
              "&:hover": { backgroundColor: "#021927;" },
            }}
            variant="contained"
          >
            Shop Now
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default ProductCard;
