import React from "react";
import { useGetAllCharactersQuery } from "../../redux/apis/character";
import { CircularProgress, Typography, Grid, Pagination } from "@mui/material";
import { Character } from "../../components/character";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setPage } from "../../redux/slice/filter";
export const HomePage: React.FC = () => {
  const { data, error, isFetching, refetch } = useGetAllCharactersQuery();
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  React.useEffect(() => {
    refetch();
  }, [refetch, filter]);
  if (isFetching) {
    return <CircularProgress />;
  }
  if (error) {
    return <Typography variant="h4">Error when fetching characters</Typography>;
  }
  if (!data) {
    return <Typography variant="h4">no have any characters</Typography>;
  }
  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  return (
    <div style={{ marginTop: 20 }}>
      <Pagination
        count={data.info.pages}
        onChange={handleChangePage}
        page={filter.page}
        variant="outlined"
        color="primary"
      />
      <Grid container spacing={3} style={{ marginTop: -10 }}>
        {data.results.map((obj: any) => {
          return (
            <Grid key={obj.id} item xs={4}>
              <Character
                key={obj.id}
                id={obj.id}
                name={obj.name}
                image={obj.image}
                status={obj.status}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
