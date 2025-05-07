import React from 'react';
import './OrganizationList.css';

export default function OrganizationList({ organizations, onSelect, onEdit, onDelete }) {
  return (
    <div className="organization-list-container">
      <div className="organization-list-header">
        <h2>Organizations</h2>
      </div>
      <table className="organization-list-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Legal Entity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map(org => (
            <tr key={org.id}>
              <td onClick={() => onSelect(org.id)} style={{ cursor: 'pointer' }}>{org.name}</td>
              <td>{org.legalEntity || '-'}</td>
              <td className="organization-list-actions">
                <button onClick={() => onSelect(org.id)}>View</button>
                <button onClick={() => onEdit(org.id)}>Edit</button>
                <button onClick={() => onDelete(org.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 