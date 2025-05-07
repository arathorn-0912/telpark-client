import { useState, useEffect } from "react";
import {
  getOrganizations,
  getOrganization,
  createOrganization,
  updateOrganization,
  deleteOrganization,
} from "../../infrastructure/api/organizationApi";

export function useOrganizations() {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrganizations();
  }, []);

  async function fetchOrganizations() {
    setLoading(true);
    const data = await getOrganizations();
    setOrganizations(data);
    setLoading(false);
  }

  return {
    organizations,
    loading,
    fetchOrganizations,
    getOrganization,
    createOrganization,
    updateOrganization,
    deleteOrganization,
  };
}
