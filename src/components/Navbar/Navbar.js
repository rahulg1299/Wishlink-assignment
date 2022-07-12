import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const CreatorVerifiedIcon = () => (
  <img
    src="assets/creator-verified.png"
    alt="Creator verified"
    className="navbar-verified-icon ms-2"
  ></img>
);

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "##fff",
    },
  },
});

const Navbar = (props) => {
  const { name, profilePic, verified } = props.about;

  return (
    <Box>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#fff",
          height: "60px",
          width: "100%",
        }}
      >
        <ThemeProvider theme={lightTheme}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Link to={`/`}>
                <IconButton size="large" aria-label="search">
                  <ArrowBackIcon />
                </IconButton>
              </Link>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, ml: 2, fontFamily: "Poppins" }}
              >
                <img
                  className="navbar-profile-pic me-2"
                  src={profilePic}
                  alt="Profile-pic"
                />
                {props.creatorFound ? name : ""}
                {props.creatorFound && verified ? (
                  <CreatorVerifiedIcon />
                ) : null}
              </Typography>
              <IconButton size="large" aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    creatorFound: state.dashboard.creatorFound,
    about: state.dashboard.about,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(Navbar);
