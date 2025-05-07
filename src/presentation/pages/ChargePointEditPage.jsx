import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useChargePoints } from "../hooks/useChargePoints";
import { useOrganizations } from "../hooks/useOrganizations";
import ChargePointForm from "../components/ChargePointForm";
import "../components/Buttons.css";

export default function ChargePointEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getChargePoint, updateChargePoint } = useChargePoints();
  const { organizations } = useOrganizations();
  const [chargePoint, setChargePoint] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const cp = await getChargePoint(id);
      setChargePoint(cp);
    }
    fetchData();
  }, [id, getChargePoint]);

  const handleSubmit = async (data) => {
    await updateChargePoint(id, data);
    navigate(`/chargepoints/${id}`);
  };

  if (!chargePoint) return <p>Loading...</p>;

  return (
    <div>
      <button className="btn secondary" onClick={() => navigate("/chargepoints")}>Back to Charge Points</button>
      <h1>Edit Charge Point</h1>
      <ChargePointForm initialData={chargePoint} organizations={organizations} onSubmit={handleSubmit} />
    </div>
  );
} 