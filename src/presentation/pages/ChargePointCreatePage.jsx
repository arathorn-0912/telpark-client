import React from "react";
import { useNavigate } from "react-router-dom";
import { useChargePoints } from "../hooks/useChargePoints";
import { useOrganizations } from "../hooks/useOrganizations";
import ChargePointForm from "../components/ChargePointForm";
import "../components/Buttons.css";

export default function ChargePointCreatePage() {
  const navigate = useNavigate();
  const { createChargePoint } = useChargePoints();
  const { organizations } = useOrganizations();

  const handleSubmit = async (data) => {
    await createChargePoint(data);
    navigate("/chargepoints");
  };

  return (
    <div>
      <button className="btn secondary" onClick={() => navigate("/chargepoints")}>Back to Charge Points</button>
      <h1>Create Charge Point</h1>
      <ChargePointForm organizations={organizations} onSubmit={handleSubmit} />
    </div>
  );
} 