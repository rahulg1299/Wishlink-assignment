import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";
import screenfull from "screenfull";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TaggedProducCardSM from "./TaggedProductCardSM";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { connect } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoaderFullPage from "../../helpers/LoaderFullPage";

const VideoPlayer = (props) => {
  const [isFullscreen, setIsFullScreen] = useState(false);

  const { taggedProducts, videoLink } = props;

  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.on("change", () => {
        screenfull.isFullscreen
          ? setIsFullScreen(true)
          : setIsFullScreen(false);
        const videoElement = document.getElementById("video-player");
        if (screenfull.isFullscreen) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    }
  }, []);

  const goFullScreen = () => {
    var fullscreenElement =
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement;
    if (fullscreenElement) {
      exitFullscreen();
    } else {
      launchIntoFullscreen(document.getElementById("video-player-container"));
    }
  };

  const launchIntoFullscreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };

  return (
    <Box id="video-player-container">
      {props.videoLink ? (
        <Box sx={{ height: "100%", width: "100%" }}>
          {isFullscreen ? (
            <Box className="video-fullscreen-exit" onClick={goFullScreen}>
              <IconButton size="large" aria-label="back" color="inherit">
                <ArrowBackIcon />
              </IconButton>
              Shop My Closet
            </Box>
          ) : null}

          {!isFullscreen ? (
            <Box className="video-play-button">
              <IconButton
                onClick={goFullScreen}
                className="video-play-button"
                size="medium"
                aria-label="search"
                color="inherit"
              >
                <PlayArrowIcon
                  sx={{
                    color: "#000",
                    backgroundColor: "#fff",
                    borderRadius: "100%",
                  }}
                />
              </IconButton>
            </Box>
          ) : null}

          <video
            id="video-player"
            className="video-player-element"
            width="100%"
            height="100%"
            controlsList="nofullscreen"
            controls={isFullscreen}
          >
            <source src={videoLink} type="video/mp4" /> Your browser does not
            support the video tag.
          </video>

          {isFullscreen && taggedProducts.length > 0 ? (
            <Box
              className="video-tagged-products"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {taggedProducts.map((product) => (
                <TaggedProducCardSM product={product} key={product.id} />
              ))}
            </Box>
          ) : null}
        </Box>
      ) : (
        <LoaderFullPage message={"Loading video..."} />
      )}
    </Box>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    videoLink: state.dashboard.videoLink,
    taggedProducts: state.dashboard.taggedProducts,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(VideoPlayer);
