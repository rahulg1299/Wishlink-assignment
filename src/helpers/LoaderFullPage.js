import CircularProgress from '@mui/material/CircularProgress';

const LoaderFullPage = ({ message }) => {
  return (
    <div style={loaderStyle.fullpage} className="container d-flex justify-content-center align-items-center mt-5">
      <CircularProgress size="2rem" thickness={3.5} />
      <p className="mt-3">{message}</p>
    </div>
  );
};

const loaderStyle = {
  fullpage: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default LoaderFullPage;
