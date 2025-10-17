import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

function MapComponent() {
  const tanta = [30.7865, 31.0004]; // Tanta, Egypt

  // size: keeps the map roughly square, responsive but capped so it's not too big
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
          <Marker position={tanta}>
            <Popup>Welcome to Tanta — congestion monitoring area 🚗</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapComponent;
