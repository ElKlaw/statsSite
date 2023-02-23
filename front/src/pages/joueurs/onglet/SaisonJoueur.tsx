import { Grid } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import { TableauSaison } from "../../../components/tableauSaison";

export const SaisonJoueur = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TableauSaison />
      </Grid>
    </Grid>
  );
};
