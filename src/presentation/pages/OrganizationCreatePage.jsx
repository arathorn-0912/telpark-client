import React from "react";
import { useNavigate } from "react-router-dom";
import { useOrganizations } from "../hooks/useOrganizations";
import OrganizationForm from "../components/OrganizationForm";
import "../components/Buttons.css";

export default function OrganizationCreatePage() {
  const navigate = useNavigate();
  const { createOrganization } = useOrganizations();

  const handleSubmit = async (data) => {
    await createOrganization(data);
    navigate("/organizations");
  };

  return (
    <div>
      <button className="btn secondary" onClick={() => navigate("/organizations")}>Back to Organizations</button>
      <h1>Create Organization</h1>
      <OrganizationForm onSubmit={handleSubmit} />
    </div>
  );
} 