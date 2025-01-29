import { useNavigate } from "react-router";

function AnalyticsPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Analytics</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
}

export default AnalyticsPage;
