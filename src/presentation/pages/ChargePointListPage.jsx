import React from "react";
import { useNavigate } from "react-router-dom";
import { useChargePoints } from "../hooks/useChargePoints";
import ChargePointList from "../components/ChargePointList";
import "../components/Buttons.css";

export default function ChargePointListPage() {
  const navigate = useNavigate();
  const { chargePoints, loading, fetchChargePoints, deleteChargePoint } = useChargePoints();

  const handleSelect = (id) => navigate(`/chargepoints/${id}`);
  const handleEdit = (id) => navigate(`/chargepoints/${id}/edit`);
  const handleDelete = async (id) => {
    await deleteChargePoint(id);
    fetchChargePoints();
  };

  return (
    <div>
      <h1>Charge Points</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button className="btn secondary" onClick={() => navigate("/")}>Home</button>
        <button className="btn success" onClick={() => navigate("/chargepoints/create")}>Create Charge Point</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ChargePointList
          chargePoints={chargePoints}
          onSelect={handleSelect}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
} 