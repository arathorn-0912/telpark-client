import React from 'react';
import './OrganizationDetail.css';

export default function OrganizationDetail({ organization }) {
  if (!organization) return <div>No organization selected.</div>;
  return (
    <div className="organization-detail-container">
      <div className="organization-detail-title">{organization.name}</div>
      <div className="organization-detail-info">
        <p><strong>ID:</strong> {organization.id}</p>
        <p><strong>Legal Entity:</strong> {organization.legalEntity || 'N/A'}</p>
      </div>
    </div>
  );
} 