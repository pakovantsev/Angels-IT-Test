import React from "react";
import { MapContainer, Marker, Polyline, /**Popup, */TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { getRoadCenter } from "./service";
import { Road } from "./types";
import Drawer from "./components/Drawer/Drawer";
import data from "./data/roads.json";

import "leaflet/dist/leaflet.css";

const customIcon = new Icon({
  iconUrl: require("./img/marker.png"),
  iconAnchor: [17.5, 35],
  iconSize: [35, 35]
});

function App() {
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

  return (
    <div>
      <Drawer
        open={open}
        selectedRoad={selectedRoad}
        closeDrawer={closeDrawer}
      />
      <MapContainer center={[54.612878, 39.83275]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {roads?.map((road => {
            const markerPosition = getRoadCenter(road.coordinates[0]);
            return (
              <div key={road.unique_value as React.Key}>
                {markerPosition && 
                <Marker
                  position={markerPosition as [number, number]}
                  icon={customIcon}
                  eventHandlers={{
                    click: () => openDrawer(road)
                  }}
                >
                  {/* <Popup>
                    {road.name}<br />
                    Тип дороги: {road.type}<br />
                    Номер дороги: {road.number}
                  </Popup> */}
                </Marker>}
                <Polyline positions={road.coordinates as [number, number][][]} color="red" />
              </div>
            );
          }))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default App;
