import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Organizations
import OrganizationListPage from "../pages/OrganizationListPage";
import OrganizationCreatePage from "../pages/OrganizationCreatePage";
import OrganizationEditPage from "../pages/OrganizationEditPage";
import OrganizationDetailPage from "../pages/OrganizationDetailPage";

// ChargePoints
import ChargePointListPage from "../pages/ChargePointListPage";
import ChargePointCreatePage from "../pages/ChargePointCreatePage";
import ChargePointEditPage from "../pages/ChargePointEditPage";
import ChargePointDetailPage from "../pages/ChargePointDetailPage";

// Home
import HomePage from "../pages/HomePage";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Organizations */}
        <Route path="/organizations" element={<OrganizationListPage />} />
        <Route path="/organizations/create" element={<OrganizationCreatePage />} />
        <Route path="/organizations/:id/edit" element={<OrganizationEditPage />} />
        <Route path="/organizations/:id" element={<OrganizationDetailPage />} />

        {/* ChargePoints */}
        <Route path="/chargepoints" element={<ChargePointListPage />} />
        <Route path="/chargepoints/create" element={<ChargePointCreatePage />} />
        <Route path="/chargepoints/:id/edit" element={<ChargePointEditPage />} />
        <Route path="/chargepoints/:id" element={<ChargePointDetailPage />} />

        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
} 