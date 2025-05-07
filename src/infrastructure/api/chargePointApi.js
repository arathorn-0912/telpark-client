import { API_BASE_URL } from "../../config/env";

const API_URL = `${API_BASE_URL}/chargepoints`;

export async function getChargePoints() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getChargePoint(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function createChargePoint(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateChargePoint(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteChargePoint(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
