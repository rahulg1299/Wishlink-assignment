import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import "./TaggedProductCardSM.css";

const TaggedProductCardSM = ({ product }) => {
  const { name, img, description, oldPrice, discount, newPrice } = product;

  return (
    <div className="w-100">
      <Card className="d-flex align-items-center tagged-products-sm-container mx-2">
        <CardMedia
          component="img"
          className="tagged-products-sm-img"
          image={img}
          alt="tagged-products"
        />
        <CardContent sx={{ fontWeight: 500, fontSize: "11px" }}>
          <Typography
            sx={{ fontWeight: 600 }}
            component="div"
            variant="subtitle2"
          >
            {name}
          </Typography>
          <Typography
            sx={{ lineHeight: 1.1, mb: 1 }}
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {description}
          </Typography>
          <Box className="d-flex flex-wrap align-items-center">
            <Typography sx={{ fontWeight: 500, fontSize: "12px", flexGrow: 1 }}>
              <span>&#x20B9;</span> {newPrice}
            </Typography>
            <Typography
              sx={{
                color: "#999999",
                textDecoration: "line-through",
                fontSize: "11px",
                flexGrow: 1,
              }}
              className="mx-2"
              variant="body2"
            >
              &#x20B9; {oldPrice}
            </Typography>
            <Typography
              sx={{ color: "#DD5F2D", fontSize: "12px", flexGrow: 1 }}
              variant="body1"
            >
              ({discount} OFF)
            </Typography>
          </Box>
        </CardContent>
        <CardActions className="d-flex justify-content-center align-items-center p-0">
          <button
            className="tagged-products-sm-btn d-flex justify-content-center align-items-center"
            variant="contained"
          >
            Shop
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

export default TaggedProductCardSM;
