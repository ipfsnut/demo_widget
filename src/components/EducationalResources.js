// components/EducationalResources.js

import React, { useState } from 'react';

const EducationalResources = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      id: 1,
      title: 'What is DAO Governance?',
      content: 'DAO governance refers to the decision-making processes in a Decentralized Autonomous Organization. It allows token holders to participate in proposing, discussing, and voting on important decisions affecting the organization.'
    },
    {
      id: 2,
      title: 'How to Create a Proposal',
      content: 'To create a proposal, you need to have a certain amount of tokens staked. Navigate to the proposal creation page, fill in the required details including title, description, and any specific actions to be taken if the proposal passes.'
    },
    {
      id: 3,
      title: 'Understanding Voting Power',
      content: 'Your voting power is determined by the number of tokens you have staked in the DAO. The more tokens you stake, the more influence you have in governance decisions.'
    },
    {
      id: 4,
      title: 'Delegation Explained',
      content: 'Delegation allows you to assign your voting power to another address. This can be useful if you want to participate in governance but prefer to have someone else vote on your behalf.'
    }
  ];

  return (
    <div className="educational-resources" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Governance 101</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', marginRight: '20px' }}>
          {topics.map(topic => (
            <div 
              key={topic.id} 
              onClick={() => setSelectedTopic(topic)}
              style={{ 
                cursor: 'pointer', 
                padding: '10px', 
                backgroundColor: selectedTopic && selectedTopic.id === topic.id ? '#e0e0e0' : 'transparent',
                marginBottom: '5px'
              }}
            >
              {topic.title}
            </div>
          ))}
        </div>
        <div style={{ width: '70%' }}>
          {selectedTopic ? (
            <>
              <h3>{selectedTopic.title}</h3>
              <p>{selectedTopic.content}</p>
            </>
          ) : (
            <p>Select a topic to learn more about DAO governance.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationalResources;