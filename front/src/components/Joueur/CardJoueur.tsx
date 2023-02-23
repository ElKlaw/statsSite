import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Joueur } from "../../utils/data";

interface Props {
  joueur: Joueur;
}

export const CardJoueur = ({ joueur }: Props) => {
  let navigate = useNavigate();
  return (
    <Card variant="outlined">
      <CardActionArea onClick={() => navigate(`/joueurs/${joueur.id}/matchs`)}>
        <Grid container>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              height={200}
              src={joueur.photo}
              title="photo joueur"
            />
          </Grid>
          <Grid item xs={8}>
            <CardContent style={{ position: "relative" }}>
              <Typography variant="body1">
                <strong>Nom complet</strong> : {joueur.prenom} {joueur.nom}
              </Typography>
              <Typography variant="body1">
                <strong>Date de naissance</strong> :{" "}
                {moment(joueur.dateNaissance).format("DD/MM/YYYY")} (
                {moment().diff(moment(joueur.dateNaissance), "years")} ans)
              </Typography>
              <Typography variant="body1">
                <strong>Poste</strong> : {joueur.poste}
              </Typography>
              <Typography variant="body1">
                <strong>Numéro</strong> : #{joueur.numero}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};
