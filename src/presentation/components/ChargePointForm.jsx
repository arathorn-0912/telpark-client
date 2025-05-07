import React, { useState } from 'react';
import './ChargePointForm.css';

export default function ChargePointForm({ initialData = {}, organizations = [], onSubmit }) {
  const [identity, setIdentity] = useState(initialData.identity || '');
  const [cpo, setCpo] = useState(initialData.cpo || (organizations[0]?.id || ''));

  function handleSubmit(e) {
    e.preventDefault();
    const cpoId = document.getElementById('select-organization').value;
    onSubmit({ identity, cpoId });
  }

  return (
    <div className="chargepoint-form-container">
      <form className="chargepoint-form" onSubmit={handleSubmit}>
        <label>
          Identity*:
          <input value={identity} onChange={e => setIdentity(e.target.value)} required />
        </label>
        <label>
          Organization*:
          <select id="select-organization" value={cpo} onChange={e => setCpo(e.target.value)} required>
            {organizations.map(org => (
              <option key={org.id} value={org.id}>{org.name}</option>
            ))}
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
} 