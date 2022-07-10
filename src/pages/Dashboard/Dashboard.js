import React, { useEffect } from "react";
import { getCreatorData } from "../../actions/dashboard";
import ProductsPage from "../../components/Products/ProductsPage";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import NotFound from "../../helpers/NotFound";
import "./Dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";

const Dashboard = (props) => {
  const params = useParams();

  useEffect(() => {
    props.dispatch(getCreatorData(params.name));
  }, []);

  useEffect(() => {}, [props.creatorFound]);

  return (
    <div>
      {props.isLoading ? (
        <div>Page still loading...</div>
      ) : props.creatorFound ? (
        <div className="dashboard-container">
          <div className="dashboard-video">
            <Navbar />
            <VideoPlayer />
          </div>
          <div className="dashboard-products">
            <ProductsPage />
          </div>
        </div>
      ) : (
        <div className="not-found-container">
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
        </div>
      )}
    </div>
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
