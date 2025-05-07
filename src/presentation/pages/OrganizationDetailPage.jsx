import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOrganizations } from "../hooks/useOrganizations";
import OrganizationDetail from "../components/OrganizationDetail";
import "../components/Buttons.css";

export default function OrganizationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getOrganization } = useOrganizations();
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const org = await getOrganization(id);
      setOrganization(org);
    }
    fetchData();
  }, [id, getOrganization]);

  if (!organization) return <p>Loading...</p>;

  return (
    <div>
      <button className="btn secondary" onClick={() => navigate("/organizations")}>Back to Organizations</button>
      <OrganizationDetail organization={organization} />
    </div>
  );
} 