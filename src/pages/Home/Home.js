import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <Box sx={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "100%" }}
      >
        <Typography
          sx={{ fontFamily: "Poppins", fontWeight: 700 }}
          variant="h4"
        >
          Wishlink
        </Typography>
        <Box
          component="form"
          sx={{ m: 1 }}
          className="w-50"
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Creator Name"
            name={name}
            value={name}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Link className="w-50" to={`/${name}`}>
          <Button fullWidth variant="contained">
            Search
          </Button>
        </Link>
        <Typography sx={{ fontFamily: "Poppins", m: 3 }}>
          Names of the available creators = 'a' and 'b'
        </Typography>
      </Grid>
    </Box>
  );
};

export default Home;
