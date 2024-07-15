// components/ProposalDraftingTool.js

import React, { useState } from 'react';

const ProposalDraftingTool = ({ onSubmitProposal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [actions, setActions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProposal({ title, description, actions });
    // Clear the form after submission
    setTitle('');
    setDescription('');
    setActions('');
  };

  return (
    <div className="proposal-drafting-tool" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Draft a New Proposal</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: '100%', height: '100px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="actions">Actions (optional):</label>
          <textarea
            id="actions"
            value={actions}
            onChange={(e) => setActions(e.target.value)}
            style={{ width: '100%', height: '50px', padding: '5px' }}
            placeholder="Describe any specific actions that should be taken if this proposal passes"
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Submit Proposal
        </button>
      </form>
    </div>
  );
};

export default ProposalDraftingTool;