import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
interface CharacterProps {
  id: number;
  name: string;
  image: string;
  status: string;
}
export const Character: React.FC<CharacterProps> = ({
  id,
  name,
  image,
  status,
}) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="300" image={image} alt="name" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.length > 20 ? name.substring(0, 20) + "..." : name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            status: {status}
          </Typography>
        </CardContent>
        <CardActions>
          <Link style={{ textDecoration: "none" }} to={`/character/${id}`}>
            <Button variant="outlined" size="small">
              More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
