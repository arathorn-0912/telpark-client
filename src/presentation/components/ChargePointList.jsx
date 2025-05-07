import React from 'react';
import './ChargePointList.css';

export default function ChargePointList({ chargePoints, onSelect, onEdit, onDelete }) {
  return (
    <div className="chargepoint-list-container">
      <div className="chargepoint-list-header">
        <h2>Charge Points</h2>
      </div>
      <table className="chargepoint-list-table">
        <thead>
          <tr>
            <th>Identity</th>
            <th>Organization</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {chargePoints.map(cp => (
            <tr key={cp.id}>
              <td onClick={() => onSelect(cp.id)} style={{ cursor: 'pointer' }}>{cp.identity}</td>
              <td>{cp.cpo?.name || cp.cpo || '-'}</td>
              <td className="chargepoint-list-actions">
                <button onClick={() => onSelect(cp.id)}>View</button>
                <button onClick={() => onEdit(cp.id)}>Edit</button>
                <button onClick={() => onDelete(cp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 