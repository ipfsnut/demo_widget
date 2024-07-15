import React, { useState, useEffect } from 'react';
import ProposalAnalytics from './components/ProposalAnalytics';
import Delegation from './components/Delegation';
import NotificationCenter from './components/NotificationCenter';
import EducationalResources from './components/EducationalResources';
import ProposalDraftingTool from './components/ProposalDraftingTool';
import CharmverseDiscussion from './components/CharmverseDiscussion';
import VotingPowerCalculator from './components/VotingPowerCalculator';
import HistoricalView from './components/HistoricalView';
import ImpactVisualization from './components/ImpactVisualization';
import GovernanceCalendar from './components/GovernanceCalendar';
import QuorumTracker from './components/QuorumTracker';

const DAOWidget = () => {
  const [followedDAOs, setFollowedDAOs] = useState([]);
  const [activeProposals, setActiveProposals] = useState([]);
  const [selectedDAO, setSelectedDAO] = useState(null);
  const [votingPower, setVotingPower] = useState(0);
  const [userStakedAmount, setUserStakedAmount] = useState(0);

  useEffect(() => {
    fetchFollowedDAOs();
    fetchActiveProposals();
  }, []);

  useEffect(() => {
    if (selectedDAO) {
      fetchVotingPower(selectedDAO);
      fetchUserStakedAmount(selectedDAO);
    }
  }, [selectedDAO]);

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
      { 
        id: 1, 
        title: 'Proposal 1', 
        dao: 1, 
        description: 'This is proposal 1', 
        votesFor: 10, 
        votesAgainst: 5, 
        totalEligibleVotes: 100,
        endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString() // 3 days from now
      },
      { 
        id: 2, 
        title: 'Proposal 2', 
        dao: 2, 
        description: 'This is proposal 2', 
        votesFor: 15, 
        votesAgainst: 7, 
        totalEligibleVotes: 100,
        endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() // 5 days from now
      },
      { 
        id: 3, 
        title: 'Proposal 3', 
        dao: 1, 
        description: 'This is proposal 3', 
        votesFor: 20, 
        votesAgainst: 18, 
        totalEligibleVotes: 100,
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days from now
      },
    ]);
  };

  const fetchVotingPower = async (daoId) => {
    // Simulating API call
    setVotingPower(Math.floor(Math.random() * 100));
  };

  const fetchUserStakedAmount = async (daoId) => {
    // Simulating API call
    setUserStakedAmount(Math.floor(Math.random() * 1000));
  };

  const handleVote = (proposalId, vote) => {
    setActiveProposals(proposals =>
      proposals.map(p =>
        p.id === proposalId
          ? { ...p, [vote === 'Yes' ? 'votesFor' : 'votesAgainst']: p[vote === 'Yes' ? 'votesFor' : 'votesAgainst'] + 1 }
          : p
      )
    );
  };

  const handleDelegation = (delegateId, amount) => {
    console.log(`Delegated ${amount} $PAGE to delegate ${delegateId}`);
    // Here you would typically make an API call to perform the delegation
  };

  return (
    <div className="dao-widget" style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <DAOOverview 
        daos={followedDAOs} 
        onSelectDAO={setSelectedDAO} 
        selectedDAO={selectedDAO}
      />
      <NotificationCenter />
      <EducationalResources />
      <GovernanceCalendar proposals={activeProposals} />
      
      {selectedDAO && (
        <>
          <VotingPowerCalculator votingPower={votingPower} />
          <Delegation 
            userStakedAmount={userStakedAmount} 
            onDelegate={handleDelegation} 
          />
          <ProposalAnalytics proposals={activeProposals.filter(p => p.dao === selectedDAO)} />
          <VotingOpportunities 
            proposals={activeProposals.filter(p => p.dao === selectedDAO)} 
            onVote={handleVote} 
          />
          <QuorumTracker proposals={activeProposals.filter(p => p.dao === selectedDAO)} />
          <ProposalDraftingTool dao={selectedDAO} />
          <CharmverseDiscussion selectedDAO={selectedDAO} />
          <HistoricalView dao={selectedDAO} />
          <ImpactVisualization dao={selectedDAO} />
        </>
      )}
    </div>
  );
};

const DAOOverview = ({ daos, onSelectDAO, selectedDAO }) => (
  <div className="dao-overview" style={{ marginBottom: '20px' }}>
    <h2>Your DAOs</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {daos.map(dao => (
        <li 
          key={dao.id} 
          onClick={() => onSelectDAO(dao.id)}
          style={{ 
            cursor: 'pointer', 
            padding: '10px', 
            backgroundColor: selectedDAO === dao.id ? '#e0e0e0' : 'transparent',
            marginBottom: '5px'
          }}
        >
          {dao.name}
        </li>
      ))}
    </ul>
  </div>
);

const VotingOpportunities = ({ proposals, onVote }) => (
  <div className="voting-opportunities" style={{ marginBottom: '20px' }}>
    <h2>Active Proposals</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {proposals.map(proposal => (
        <li key={proposal.id} style={{ marginBottom: '15px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>{proposal.title}</h3>
          <p>{proposal.description}</p>
          <div>Votes For: {proposal.votesFor} | Votes Against: {proposal.votesAgainst}</div>
          <div style={{ marginTop: '10px' }}>
            <button onClick={() => onVote(proposal.id, 'Yes')} style={{ marginRight: '10px' }}>Yes</button>
            <button onClick={() => onVote(proposal.id, 'No')}>No</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default DAOWidget;