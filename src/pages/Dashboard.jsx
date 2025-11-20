import React, { useState } from "react";
import MapComponent from "../components/MapComponent";

function Dashboard() {
  const [alertMessage, setAlertMessage] = useState(
    "Welcome! Select your destination."
  );
  const [userPosition, setUserPosition] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleStartRoute = () => {
    if (!userPosition || !destination) {
      setAlertMessage("Select your destination first Bro!");
      return;
    }

    console.log("User position:", userPosition);
    console.log("Destination:", destination);
    setAlertMessage("Route started! (haha not really... comming soon!)");
  };

  return (
    <div className="page" style={{ padding: "1rem" }}>
      <h1>Urban Congestion Map</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {/* Map */}
        <div style={{ flex: "2 1 600px", minWidth: "300px", maxWidth: "800px" }}>
          <MapComponent
            onUserPositionChange={setUserPosition}
            onDestinationSelect={setDestination}
          />
        </div>

        {/* Alert Box + Button */}
        <div
          style={{
            flex: "1 1 300px",
            minWidth: "250px",
            maxWidth: "350px",
            border: "2px solid rgba(56,189,248,0.2)",
            borderRadius: "12px",
            padding: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "1rem",
          }}
        >
          <h2>Notice</h2>
          <p>{alertMessage}</p>
          <button
            onClick={handleStartRoute}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#38bdf8",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Start Route
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
