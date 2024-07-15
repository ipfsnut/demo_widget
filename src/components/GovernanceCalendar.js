// components/GovernanceCalendar.js

import React from 'react';

const GovernanceCalendar = ({ proposals }) => {
  // Helper function to group proposals by date
  const groupProposalsByDate = (proposals) => {
    return proposals.reduce((acc, proposal) => {
      const date = new Date(proposal.endDate).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(proposal);
      return acc;
    }, {});
  };

  const groupedProposals = groupProposalsByDate(proposals);

  return (
    <div className="governance-calendar" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Governance Calendar</h2>
      {Object.entries(groupedProposals).map(([date, dateProposals]) => (
        <div key={date} style={{ marginBottom: '15px' }}>
          <h3>{date}</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {dateProposals.map(proposal => (
              <li key={proposal.id} style={{ marginBottom: '5px' }}>
                <strong>{proposal.title}</strong>
                <br />
                <small>Voting ends at {new Date(proposal.endDate).toLocaleTimeString()}</small>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GovernanceCalendar;