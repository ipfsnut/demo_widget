import React, { useState, useEffect } from 'react';
import ProposalAnalytics from './components/ProposalAnalytics';
import Delegation from './components/Delegation';
import NotificationCenter from './components/NotificationCenter';
import EducationalResources from './components/EducationalResources';
import ProposalDraftingTool from './components/ProposalDraftingTool';
import GovernanceForum from './components/GovernanceForum';
import VotingPowerCalculator from './components/VotingPowerCalculator';
import HistoricalView from './components/HistoricalView';
import ImpactVisualization from './components/ImpactVisualization';
import GovernanceCalendar from './components/GovernanceCalendar';
import QuorumTracker from './components/QuorumTracker';

const DAOWidget = () => {
  const [followedDAOs, setFollowedDAOs] = useState([]);
  const [activeProposals, setActiveProposals] = useState([]);
  const [selectedDAO, setSelectedDAO] = useState(null);

  useEffect(() => {
    fetchFollowedDAOs();
    fetchActiveProposals();
  }, []);

  const fetchFollowedDAOs = async () => {
    // Simulating API call
    setFollowedDAOs([
      { id: 1, name: 'DAO 1' },
      { id: 2, name: 'DAO 2' },
      { id: 3, name: 'DAO 3' },
    ]);
  };

  const fetchActiveProposals = async () => {
    // Simulating API call
    setActiveProposals([
      { id: 1, title: 'Proposal 1', dao: 1 },
      { id: 2, title: 'Proposal 2', dao: 2 },
      { id: 3, title: 'Proposal 3', dao: 1 },
    ]);
  };

  const handleVote = (proposalId, vote) => {
    console.log(`Voted ${vote} on proposal ${proposalId}`);
    // Implement actual voting logic here
  };

  return (
    <div className="dao-widget">
      <DAOOverview 
        daos={followedDAOs} 
        onSelectDAO={setSelectedDAO} 
      />
      <NotificationCenter />
      <EducationalResources />
      <GovernanceCalendar proposals={activeProposals} />
      
      {selectedDAO && (
        <>
          <VotingPowerCalculator dao={selectedDAO} />
          <Delegation dao={selectedDAO} />
          <ProposalAnalytics proposals={activeProposals.filter(p => p.dao === selectedDAO)} />
          <VotingOpportunities 
            proposals={activeProposals.filter(p => p.dao === selectedDAO)} 
            onVote={handleVote} 
          />
          <QuorumTracker proposals={activeProposals.filter(p => p.dao === selectedDAO)} />
          <ProposalDraftingTool dao={selectedDAO} />
          <GovernanceForum dao={selectedDAO} />
          <HistoricalView dao={selectedDAO} />
          <ImpactVisualization dao={selectedDAO} />
        </>
      )}
    </div>
  );
};

const DAOOverview = ({ daos, onSelectDAO }) => (
  <div className="dao-overview">
    <h2>Your DAOs</h2>
    <ul>
      {daos.map(dao => (
        <li key={dao.id} onClick={() => onSelectDAO(dao.id)}>
          {dao.name}
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
          {proposal.title}
          <button onClick={() => onVote(proposal.id, 'Yes')}>Yes</button>
          <button onClick={() => onVote(proposal.id, 'No')}>No</button>
        </li>
      ))}
    </ul>
  </div>
);

export default DAOWidget;