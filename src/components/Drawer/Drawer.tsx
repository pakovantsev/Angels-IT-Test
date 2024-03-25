import React from "react";
import { Card, CardActions, CardContent, Drawer as MuiDrawer, IconButton, Typography } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import "leaflet/dist/leaflet.css";
import { DrawerProps } from "./types";

function Drawer({ open, selectedRoad, closeDrawer }: DrawerProps) {
  return (
    <div>
      <MuiDrawer
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Card sx={{ width: 375 }}>
          <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={closeDrawer}>
              <ChevronLeft />
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {selectedRoad?.name}<br />
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Тип дороги: {selectedRoad?.type}<br />
              Номер дороги: {selectedRoad?.number}
            </Typography>
          </CardContent>
        </Card>
      </MuiDrawer>
    </div>
  );
}

export default Drawer;
