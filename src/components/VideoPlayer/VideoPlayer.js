import React, { useState, useEffect } from "react";
import "./VideoPlayer.css";
import screenfull from "screenfull";
import IconButton from "@mui/material/IconButton";
import TaggedProducCardSM from "./TaggedProductCardSM";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { connect } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
    <div id="video-player-container">
      {props.videoLink ? (
        <div className="video-player-box">
          {isFullscreen ? (
            <div className="video-fullscreen-exit ms-3" onClick={goFullScreen}>
              <IconButton size="large" aria-label="search" color="inherit">
                <ArrowBackIcon />
              </IconButton>
              Shop My Closet
            </div>
          ) : null}

          {!isFullscreen ? (
            <div className="video-play-button">
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
            </div>
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
            <div className="video-tagged-products d-flex justify-content-start align-items-center">
              {taggedProducts.map((product) => (
                <TaggedProducCardSM product={product} key={product.id} />
              ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div>Still setIsLoading...</div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    // videos: state.dashboard.vidos,
    videoLink: state.dashboard.videoLink,
    taggedProducts: state.dashboard.taggedProducts,
    ...ownProps,
  };
};

export default connect(mapStateToProps)(VideoPlayer);
