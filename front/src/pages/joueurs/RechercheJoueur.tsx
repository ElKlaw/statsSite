import { Container, Grid, InputAdornment } from "@mui/material";
import { url } from "csx";
import { useState } from "react";

import imagefond from "../../ressources/fond.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { PaginationBase } from "../../components/Pagination";
import { Joueur, listeJoueurs } from "../../utils/data";
import { CardJoueur } from "../../components/Joueur/CardJoueur";
import { TextFieldBase } from "../../components/MaterialUi/TextField";

export const RechercheJoueur = () => {
  const [search, setSearch] = useState("");
  const [joueurs, setJoueurs] = useState<Array<Joueur>>(listeJoueurs);
  const [page, setPage] = useState(0);
  const [nbrePage, setNbrePage] = useState(1);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{
            backgroundImage: url(imagefond),
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: 200,
          }}
        >
          <Grid item xs={12} sm={10} md={8} lg={4}>
            <TextFieldBase
              id="input-joueur"
              placeholder="Rechercher un joueur"
              variant="outlined"
              size="small"
              value={search}
              fullWidth
              onChange={(event) => setSearch(event.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="lg" style={{ marginTop: 30, marginBottom: 30 }}>
          <Grid container spacing={2}>
            {nbrePage > 1 && (
              <Grid item xs={12}>
                <PaginationBase
                  nbrePage={nbrePage}
                  page={page + 1}
                  handleChangePage={setPage}
                />
              </Grid>
            )}
            {joueurs.map((joueur) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={joueur.id}>
                <CardJoueur joueur={joueur} />
              </Grid>
            ))}
            {nbrePage > 1 && (
              <Grid item xs={12}>
                <PaginationBase
                  nbrePage={nbrePage}
                  page={page + 1}
                  handleChangePage={setPage}
                />
              </Grid>
            )}
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};
