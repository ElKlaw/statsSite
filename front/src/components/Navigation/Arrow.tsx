import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const FlecheRetour = (link?: string) => {
  const navigate = useNavigate();
  const goBack = () => (link ? navigate(link) : navigate(-1));
  return (
    <Grid container spacing={1} onClick={goBack} style={{ cursor: "pointer" }}>
      <Grid item>
        <ArrowBackIosIcon />
      </Grid>
      <Grid item>
        <Typography>Retour</Typography>
      </Grid>
    </Grid>
  );
};

export const FlecheHome = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <Grid container spacing={1} onClick={goHome} style={{ cursor: "pointer" }}>
      <Grid item>
        <ArrowBackIosIcon />
      </Grid>
      <Grid item>
        <Typography>Retour</Typography>
      </Grid>
    </Grid>
  );
};
