import React from 'react';

const ProposalAnalytics = ({ proposals }) => {
  const totalProposals = proposals.length;
  const passedProposals = proposals.filter(p => p.votesFor > p.votesAgainst).length;
  const failedProposals = proposals.filter(p => p.votesAgainst >= p.votesFor).length;

  return (
    <div className="proposal-analytics">
      <h2>Proposal Analytics</h2>
      <p>Total Proposals: {totalProposals}</p>
      <p>Passed Proposals: {passedProposals}</p>
      <p>Failed Proposals: {failedProposals}</p>
    </div>
  );
};

export default ProposalAnalytics;