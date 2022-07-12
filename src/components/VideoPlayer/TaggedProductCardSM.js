import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

const TaggedProductCardSM = ({ product }) => {
  const { name, img, description, oldPrice, discount, newPrice } = product;

  return (
    <Box sx={{ width: "100%" }}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          mx: 2,
          height: "98px",
          width: "300px",
          borderRadius: "8px",
          p: 1,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: "48px",
            width: "48px",
            objectFit: "contain",
            borderRadius: "8px",
            flexGrow: 1,
          }}
          image={img}
          alt="tagged-product"
        />
        <CardContent
          sx={{ fontWeight: 500, fontSize: "11px", flexGrow: 2, px: 1 }}
        >
          <Typography sx={{ fontWeight: 600 }} variant="subtitle2">
            {name}
          </Typography>
          <Typography
            sx={{ lineHeight: 1.1, mb: 1 }}
            variant="subtitle2"
            color="text.secondary"
          >
            {description}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
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
            >
              &#x20B9; {oldPrice}
            </Typography>
            <Typography
              sx={{ color: "#DD5F2D", fontSize: "12px", flexGrow: 1 }}
            >
              ({discount} OFF)
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 0,
            flexGrow: 1,
          }}
        >
          <Button
            sx={{
              height: "25px",
              width: "61px",
              borderRadius: "100px",
              backgroundColor: "#021927",
              color: "#fff",
              fontWeight: 500,
              fontSize: "11px",
              "&:hover": { backgroundColor: "#021927;" },
            }}
            variant="contained"
          >
            Shop
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default TaggedProductCardSM;
