import React from "react";
import { useNavigate } from "react-router-dom";
import { useOrganizations } from "../hooks/useOrganizations";
import OrganizationList from "../components/OrganizationList";
import "../components/Buttons.css";

export default function OrganizationListPage() {
  const navigate = useNavigate();
  const { organizations, loading, fetchOrganizations, deleteOrganization } = useOrganizations();

  const handleSelect = (id) => navigate(`/organizations/${id}`);
  const handleEdit = (id) => navigate(`/organizations/${id}/edit`);
  const handleDelete = async (id) => {
    await deleteOrganization(id);
    fetchOrganizations();
  };

  return (
    <div>
      <h1>Organizations</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <button className="btn secondary" onClick={() => navigate("/")}>Home</button>
        <button className="btn success" onClick={() => navigate("/organizations/create")}>Create Organization</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <OrganizationList
          organizations={organizations}
          onSelect={handleSelect}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
} 