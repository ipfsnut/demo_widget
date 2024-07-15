// components/QuorumTracker.js

import React from 'react';

const QuorumTracker = ({ proposals }) => {
  const calculateQuorumPercentage = (proposal) => {
    const totalVotes = proposal.votesFor + proposal.votesAgainst;
    return (totalVotes / proposal.totalEligibleVotes) * 100;
  };

  return (
    <div className="quorum-tracker" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Quorum Tracker</h2>
      {proposals.map(proposal => (
        <div key={proposal.id} style={{ marginBottom: '15px' }}>
          <h3>{proposal.title}</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ 
              width: '200px', 
              height: '20px', 
              backgroundColor: '#e0e0e0', 
              marginRight: '10px' 
            }}>
              <div style={{
                width: `${Math.min(calculateQuorumPercentage(proposal), 100)}%`,
                height: '100%',
                backgroundColor: calculateQuorumPercentage(proposal) >= 20 ? 'green' : 'orange'
              }}></div>
            </div>
            <span>{calculateQuorumPercentage(proposal).toFixed(2)}% voted (20% required for quorum)</span>
          </div>
          {calculateQuorumPercentage(proposal) < 20 && (
            <p style={{ color: 'red' }}>Quorum not reached. More votes needed!</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuorumTracker;