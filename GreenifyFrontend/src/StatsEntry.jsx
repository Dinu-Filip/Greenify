import { useNavigate } from "react-router";

function StatsEntryPage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Enter today's states</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </>
  );
}

export default StatsEntryPage;
