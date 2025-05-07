import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useChargePoints } from "../hooks/useChargePoints";
import ChargePointDetail from "../components/ChargePointDetail";
import "../components/Buttons.css";

export default function ChargePointDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getChargePoint } = useChargePoints();
  const [chargePoint, setChargePoint] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const cp = await getChargePoint(id);
      setChargePoint(cp);
    }
    fetchData();
  }, [id, getChargePoint]);

  if (!chargePoint) return <p>Loading...</p>;

  return (
    <div>
      <button className="btn secondary" onClick={() => navigate("/chargepoints")}>Back to Charge Points</button>
      <ChargePointDetail chargePoint={chargePoint} />
    </div>
  );
} 