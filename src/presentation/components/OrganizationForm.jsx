import React, { useState } from 'react';
import './OrganizationForm.css';

export default function OrganizationForm({ initialData = {}, onSubmit }) {
  const [name, setName] = useState(initialData.name || '');
  const [legalEntity, setLegalEntity] = useState(initialData.legalEntity || '');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, legalEntity });
  }

  return (
    <div className="organization-form-container">
      <form className="organization-form" onSubmit={handleSubmit}>
        <label>
          Name*:
          <input value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>
          Legal Entity:
          <input value={legalEntity} onChange={e => setLegalEntity(e.target.value)} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
} 