import "./App.css";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to Greenify</h1>
      <h2>Your guide to becoming more eco-friendly</h2>
      <div onClick={() => navigate("/stats-entry")}>
        <h3>Enter today's data</h3>
      </div>
      <div onClick={() => navigate("/analytics")}>
        <h3>Track your Greenify journey</h3>
      </div>
    </>
  );
}

export default App;
