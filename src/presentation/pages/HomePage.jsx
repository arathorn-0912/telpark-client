import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Buttons.css";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh"
    }}>
      <h1 style={{ marginBottom: "2rem" }}>Welcome to Telpark!</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <button className="btn" onClick={() => navigate("/organizations")}>Organizations</button>
        <button className="btn" onClick={() => navigate("/chargepoints")}>Charge Points</button>
      </div>
    </div>
  );
} 