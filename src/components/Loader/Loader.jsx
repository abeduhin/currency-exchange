import CircularProgress from "@mui/material/CircularProgress";

export const Loader = () => (
  <CircularProgress color="success"
    data-testid="loader"
    sx={{
      position: "absolute",
      left: "47%",
      top: "57%",
      
    }}
  />
);