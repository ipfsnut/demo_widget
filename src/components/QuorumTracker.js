import React from 'react';

const QuorumTracker = ({ proposals }) => (
  <div className="quorum-tracker">
    <h2>Quorum Progress</h2>
    <p>Quorum tracking for {proposals.length} proposals will be visualized here.</p>
  </div>
);

export default QuorumTracker;