import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useGetCharacterByIdQuery } from "../../redux/apis/character";
import { Typography, CircularProgress } from "@mui/material";
import { LocationList } from "../../components/locationList/LocationList";
import styles from "./CharacterDetails.module.scss";

export const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetCharacterByIdQuery(Number(id) || 0);

  if (isLoading) {
    return <CircularProgress />;
  }
  if (error) {
    return <Navigate to="/" replace />;
  }
  if (!data) {
    return <Typography variant="h4">Empty data</Typography>;
  }
  const locationId = data.location.url.split("/").pop();

  return (
    <div className={styles.root}>
      <div className={styles.characterImage}>
        <img src={data.image} alt={data.name} />
      </div>
      <div className={styles.character}>
        <Typography variant="h3">{data.name}</Typography>
        <ul className={styles.detailsList}>
          <li>
            <Typography variant="body2" color="text.secondary">
              Status: <b>{data.status}</b>
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              Species: <b>{data.species}</b>
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              Gender: <b>{data.gender}</b>
            </Typography>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa alias
          fugit perferendis dolore enim blanditiis, omnis sint fugiat quaerat
          autem consequuntur harum porro nulla ad rerum mollitia dolor? Rerum,
          cupiditate.
        </p>
        <Typography className={styles.blockTitle} variant="h4">
          Episodes:
        </Typography>
        <LocationList ids={Number(locationId)} />
      </div>
    </div>
  );
};
