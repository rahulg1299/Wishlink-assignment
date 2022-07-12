import React, { useEffect } from "react";
import { getCreatorData } from "../../actions/dashboard";
import ProductsPage from "../../components/Products/ProductsPage";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import NotFound from "../../helpers/NotFound";
import Navbar from "../../components/Navbar/Navbar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import LoaderFullPage from "../../helpers/LoaderFullPage";

const Dashboard = (props) => {
  const params = useParams();

  useEffect(() => {
    props.dispatch(getCreatorData(params.name));
  }, []);

  useEffect(() => {}, [props.creatorFound]);

  return (
    <Box>
      {props.isLoading ? (
        <LoaderFullPage message={"Page Loading..."} />
      ) : props.creatorFound ? (
        <Box sx={{ height: "100vh", overflowY: "auto", position: "relative" }}>
          <Box
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 0,
              height: "60vh",
              width: "100%",
            }}
          >
            <Navbar />
            <VideoPlayer />
          </Box>
          <Box
            sx={{
              position: "relative",
              zIndex: 100,
              backgroundColor: "#F1F4F9",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
          >
            <ProductsPage />
          </Box>
        </Box>
      ) : (
        <Box sx={{ backgroundColor: "#fff" }}>
          <Link to={"/"}>
            <Button
              type="submit"
              className="my-3 mx-3 w-25"
              variant="contained"
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
          </Link>
          <NotFound />
        </Box>
      )}
    </Box>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.dashboard.isLoading,
    creatorFound: state.dashboard.creatorFound,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(Dashboard);
