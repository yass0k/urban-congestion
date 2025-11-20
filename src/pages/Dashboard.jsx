import React, { useState } from "react";
import MapComponent from "../components/MapComponent";

function Dashboard() {
  const [alertMessage, setAlertMessage] = useState("Welcome! Select your destination.");

  return (
    <div className="page" style={{ padding: "1rem" }}>
      <h1>Urban Congestion Map</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          flexWrap: "wrap",          // allows stacking on small screens
          justifyContent: "center",  // centers content horizontally
          alignItems: "flex-start",  // aligns top edges
        }}
      >
        {/* Map */}
        <div style={{ flex: "1 1 500px", minWidth: "300px" }}>
          <MapComponent />
        </div>

        {/* Alert Box */}
        <div
          style={{
            flex: "0 0 250px",
            minWidth: "250px",
            border: "2px solid rgba(56,189,248,0.2)",
            borderRadius: "12px",
            padding: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            height: "fit-content",
            alignSelf: "flex-start",  // keeps it top-aligned
          }}
        >
          <h2>Alerts</h2>
          <p>{alertMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
