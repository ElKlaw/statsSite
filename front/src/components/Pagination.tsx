import { Grid } from "@mui/material";
import { Pagination } from "@mui/material";
import React from "react";

interface Props {
  nbrePage: number;
  page: number;
  handleChangePage: (page: number) => void;
}
export function PaginationBase({ nbrePage, page, handleChangePage }: Props) {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Pagination
          size="small"
          count={nbrePage}
          showFirstButton
          showLastButton
          page={page}
          onChange={(event: any, newPage: number) =>
            handleChangePage(newPage - 1)
          }
        />
      </Grid>
    </Grid>
  );
}
