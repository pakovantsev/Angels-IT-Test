import React from "react";
import data from "./data/roads.json";
import { Road } from "./types";

const useApp = () => {
  const [roads, setRoads] = React.useState<Road[]>();

  React.useEffect(() => {
    setRoads((data as Road[]).map((road) => ({
      ...road,
      coordinates: road.coordinates.map(v => v.map((coordinates: number[]) => [coordinates[1], coordinates[0]]))
    })));
  }, [setRoads]);

  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedRoad, setSelectedRoad] = React.useState<Road | null>(null);

  function openDrawer(road: Road) {
    setSelectedRoad(road);
    setOpen(true);
  }

  function closeDrawer() {
    setOpen(false);
    setSelectedRoad(null);
  }

  return {
    selectedRoad,
    closeDrawer,
    openDrawer,
    roads,
    open
  };
};

export default useApp;
