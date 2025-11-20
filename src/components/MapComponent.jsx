import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix Leaflet default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// 🧭 Tracks user's live location
function UserLocationMarker({ onPositionChange }) {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const newPos = [latitude, longitude];
        setPosition(newPos);
        if (onPositionChange) onPositionChange(newPos);
        map.setView(newPos, 14);
      },
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [map, onPositionChange]);

  return position ? (
    <Marker position={position}>
      <Popup>😉 منور يا برنس</Popup>
    </Marker>
  ) : null;
}

// 🎯 Lets the user set their destination by clicking the map
function DestinationMarker({ onDestinationSelect }) {
  const [destination, setDestination] = useState(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      const newDest = [lat, lng];
      setDestination(newDest);
      if (onDestinationSelect) onDestinationSelect(newDest);
    },
  });

  return destination ? (
    <Marker position={destination}>
      <Popup>🎯 وجهتك هنا</Popup>
    </Marker>
  ) : null;
}

// MapComponent now accepts callbacks to pass coordinates up to Dashboard
function MapComponent({ onUserPositionChange, onDestinationSelect }) {
  const [userPosition, setUserPosition] = useState(null);
  const [destination, setDestination] = useState(null);

  const size = "min(80vw, 520px)";

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
      <div
        style={{
          width: size,
          height: size,
          border: "2px solid rgba(56,189,248,0.14)",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(2,6,23,0.35)",
        }}
      >
        <MapContainer center={[30.7865, 31.0004]} zoom={12} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* User’s live location — forwards coords to parent prop and keeps local state */}
          <UserLocationMarker
            onPositionChange={(pos) => {
              setUserPosition(pos);
              if (onUserPositionChange) onUserPositionChange(pos);
            }}
          />

          {/* User’s selected destination — forwards coords to parent prop and keeps local state */}
          <DestinationMarker
            onDestinationSelect={(pos) => {
              setDestination(pos);
              if (onDestinationSelect) onDestinationSelect(pos);
            }}
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
