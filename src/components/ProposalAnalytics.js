import React from 'react';

const ProposalAnalytics = ({ proposals }) => (
  <div className="proposal-analytics">
    <h2>Proposal Analytics</h2>
    <p>Analytics for {proposals.length} proposals will be displayed here.</p>
  </div>
);

export default ProposalAnalytics;