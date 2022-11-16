import React from "react";
import { useGetLocationByIdQuery } from "../../redux/apis/location";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Typography } from "@mui/material";

interface LocationListProps {
  ids: number | number[];
}
export const LocationList: React.FC<LocationListProps> = ({ ids }) => {
  const { data, isLoading, error } = useGetLocationByIdQuery(ids);
  if (isLoading) {
    return <p>Loading character locations...</p>;
  }
  if (error) {
    return <Typography variant="h4">Error when loading locations</Typography>;
  }
  if (!data) {
    return null;
  }

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {data.map((location) => {
        return (
          <ListItem key={location.id}>
            <ListItemAvatar>
              <Avatar>
                <LocationOnOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={location.name} secondary={location.type} />
          </ListItem>
        );
      })}
    </List>
  );
};
