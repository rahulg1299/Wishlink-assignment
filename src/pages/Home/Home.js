import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div
      // style={{ width: "100%", height: "100%", }}
      className="home-container container d-flex flex-column justify-content-center align-items-center"
    >
      <h1>Wishlink</h1>
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
        <Button className="w-100" variant="contained">
          Search
        </Button>
      </Link>
    </div>
  );
};

export default Home;
