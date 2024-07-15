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
    // API call to get user's followed DAOs
    // setFollowedDAOs(result);
  };

  const fetchActiveProposals = async () => {
    // API call to get active proposals from followed DAOs
    // setActiveProposals(result);
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

// Other component definitions (DAOOverview, VotingOpportunities) remain the same

export default DAOWidget;