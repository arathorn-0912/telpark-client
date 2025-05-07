import { API_BASE_URL } from "../../config/env";

const API_URL = `${API_BASE_URL}/organizations`;

export async function getOrganizations() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getOrganization(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function createOrganization(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateOrganization(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteOrganization(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
