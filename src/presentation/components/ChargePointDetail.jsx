import React from 'react';

export default function ChargePointDetail({ chargePoint }) {
  if (!chargePoint) return <div>No charge point selected.</div>;
  return (
    <div>
      <h3>{chargePoint.identity}</h3>
      <p>ID: {chargePoint.id}</p>
      <p>Organization: {chargePoint.cpo?.name || chargePoint.cpo || 'N/A'}</p>
    </div>
  );
} 