import { useState, useEffect } from "react";
import {
  getChargePoints,
  getChargePoint,
  createChargePoint,
  updateChargePoint,
  deleteChargePoint,
} from "../../infrastructure/api/chargePointApi";

export function useChargePoints() {
  const [chargePoints, setChargePoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChargePoints();
  }, []);

  async function fetchChargePoints() {
    setLoading(true);
    const data = await getChargePoints();
    setChargePoints(data);
    setLoading(false);
  }

  return {
    chargePoints,
    loading,
    fetchChargePoints,
    getChargePoint,
    createChargePoint,
    updateChargePoint,
    deleteChargePoint,
  };
}
