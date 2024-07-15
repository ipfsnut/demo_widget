import React, { useState } from 'react';

const mockDAOs = [
  { id: 1, name: 'DAO 1', membershipStatus: 'Active' },
  { id: 2, name: 'DAO 2', membershipStatus: 'Pending' },
  { id: 3, name: 'DAO 3', membershipStatus: 'Active' },
];

const mockProposals = [
  { id: 1, title: 'Proposal 1', deadline: '2024-07-20', voteCount: 42 },
  { id: 2, title: 'Proposal 2', deadline: '2024-07-25', voteCount: 28 },
];

const DAOWidget = () => {
  const [followedDAOs] = useState(mockDAOs);
  const [activeProposals] = useState(mockProposals);

  const handleVote = (proposalId, vote) => {
    console.log(`Voted ${vote} on proposal ${proposalId}`);
  };

  const handleCreateProposal = (proposalData) => {
    console.log('New proposal created:', proposalData);
  };

  return (
    <div className="dao-widget">
      <DAOOverview daos={followedDAOs} />
      <VotingOpportunities 
        proposals={activeProposals} 
        onVote={handleVote} 
      />
      <ProposalCreation onSubmit={handleCreateProposal} />
    </div>
  );
};

const DAOOverview = ({ daos }) => (
  <div className="dao-overview">
    <h2>Your DAOs</h2>
    <ul>
      {daos.map(dao => (
        <li key={dao.id}>
          {dao.name} - Status: {dao.membershipStatus}
        </li>
      ))}
    </ul>
  </div>
);

const VotingOpportunities = ({ proposals, onVote }) => (
  <div className="voting-opportunities">
    <h2>Active Proposals</h2>
    <ul>
      {proposals.map(proposal => (
        <li key={proposal.id}>
          {proposal.title} - Deadline: {proposal.deadline} - Votes: {proposal.voteCount}
          <button onClick={() => onVote(proposal.id, 'Yes')}>Yes</button>
          <button onClick={() => onVote(proposal.id, 'No')}>No</button>
        </li>
      ))}
    </ul>
  </div>
);

const ProposalCreation = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="proposal-creation">
      <h2>Create New Proposal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Proposal Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Proposal Description"
          required
        />
        <button type="submit">Create Proposal</button>
      </form>
    </div>
  );
};

export default DAOWidget;