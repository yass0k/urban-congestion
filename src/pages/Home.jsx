import { useNavigate } from "react-router-dom";
import FlipCard from "../components/FlipCard";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Urban Congestion Smart Monitor</h1>
      <p>Track real-time traffic and make your journey smoother 🤍 </p>
      <div style={{ marginTop: "2rem" }}>
        <button
          className="cta-btn"
          style={{ marginRight: "1rem" }}
          onClick={() => navigate("/dashboard")}
        >
          Go to Dashboard
        </button>
        <button
          className="cta-btn"
          onClick={() => navigate("/about")}
        >
          Learn More
        </button>
      </div>
          <div
      style={{
        marginTop: "3rem",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      <FlipCard
        title="What is our purpose?"
        content="To alleviate urban congestion through real-time monitoring and smart solutions."
      />

      <FlipCard
        title="How does it work?"
        content="Sensors collect live traffic data that’s visualized on our dashboard map."
      />

      <FlipCard
        title="Why Egypt?"
        content="The project is built in Egypt to address local traffic challenges and improve daily commutes."
      />
      </div>
    </div>
  )
}

export default Home
