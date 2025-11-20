import React, { useState } from "react";
import MapComponent from "../components/MapComponent";

function Dashboard() {
  const [alertMessage, setAlertMessage] = useState(
    "Welcome! Select your destination."
  );

  return (
    <div className="page" style={{ padding: "1rem" }}>
      <h1>Urban Congestion Map</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center", // center the container horizontally
          alignItems: "flex-start",
        }}
      >
        {/* Map */}
        <div
          style={{
            flex: "2 1 600px", // map takes 2x space compared to alert
            minWidth: "300px",
            maxWidth: "800px", // keeps map from getting too huge
          }}
        >
          <MapComponent />
        </div>

        {/* Alert Box */}
        <div
          style={{
            flex: "1 1 300px", // alert takes 1x space
            minWidth: "250px",
            maxWidth: "350px", // prevent it from being too small on desktop
            border: "2px solid rgba(56,189,248,0.2)",
            borderRadius: "12px",
            padding: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            height: "fit-content",
            alignSelf: "flex-start",
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
