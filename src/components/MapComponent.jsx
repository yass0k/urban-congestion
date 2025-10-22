import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// elly beyetrack el user location
function UserLocationMarker() {
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
        map.setView(newPos, 14); // el moving 
      },
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [map]);

  return position ? (
    <Marker position={position}>
      <Popup> 😉 منور يا برنس </Popup>
    </Marker>
  ) : null;
}

function MapComponent() {
  const tanta = [30.7865, 31.0004]; // da makan tanta
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
        <MapContainer center={tanta} zoom={12} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* 🧭 Add the user's location marker */}
          <UserLocationMarker />
        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
