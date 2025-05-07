import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useOrganizations } from "../hooks/useOrganizations";
import OrganizationForm from "../components/OrganizationForm";
import "../components/Buttons.css";

export default function OrganizationEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOrganization, updateOrganization } = useOrganizations();
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const org = await getOrganization(id);
      setOrganization(org);
    }
    fetchData();
  }, [id, getOrganization]);

  const handleSubmit = async (data) => {
    await updateOrganization(id, data);
    navigate(`/organizations/${id}`);
  };

  if (!organization) return <p>Loading...</p>;

  return (
    <div>
      <button className="btn secondary" onClick={() => navigate("/organizations")}>Back to Organizations</button>
      <h1>Edit Organization</h1>
      <OrganizationForm initialData={organization} onSubmit={handleSubmit} />
    </div>
  );
} 