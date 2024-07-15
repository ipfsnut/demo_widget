// components/ImpactVisualization.js

import React, { useState, useEffect } from 'react';

const ImpactVisualization = ({ selectedDAO }) => {
  const [impactData, setImpactData] = useState(null);

  useEffect(() => {
    if (selectedDAO) {
      fetchImpactData(selectedDAO);
    }
  }, [selectedDAO]);

  const fetchImpactData = async (daoId) => {
    // Simulating API call
    const mockImpactData = {
      treasuryGrowth: [
        { month: 'Jan', value: 100000 },
        { month: 'Feb', value: 120000 },
        { month: 'Mar', value: 115000 },
        { month: 'Apr', value: 135000 },
      ],
      membershipGrowth: [
        { month: 'Jan', value: 500 },
        { month: 'Feb', value: 550 },
        { month: 'Mar', value: 600 },
        { month: 'Apr', value: 680 },
      ],
      proposalSuccess: [
        { month: 'Jan', passed: 3, failed: 1 },
        { month: 'Feb', passed: 2, failed: 2 },
        { month: 'Mar', passed: 4, failed: 0 },
        { month: 'Apr', passed: 3, failed: 1 },
      ],
    };
    setImpactData(mockImpactData);
  };

  const renderBarChart = (data, title, valueLabel) => (
    <div style={{ marginBottom: '20px' }}>
      <h3>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px' }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
            <div style={{ 
              width: '40px', 
              height: `${(item.value / Math.max(...data.map(d => d.value))) * 180}px`, 
              backgroundColor: '#4CAF50',
              marginBottom: '5px'
            }}></div>
            <div>{item.month}</div>
            <div>{item.value} {valueLabel}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStackedBarChart = (data, title) => (
    <div style={{ marginBottom: '20px' }}>
      <h3>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px' }}>
        {data.map((item, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column-reverse', height: '180px' }}>
              <div style={{ 
                width: '40px', 
                height: `${(item.passed / (item.passed + item.failed)) * 180}px`, 
                backgroundColor: '#4CAF50',
              }}></div>
              <div style={{ 
                width: '40px', 
                height: `${(item.failed / (item.passed + item.failed)) * 180}px`, 
                backgroundColor: '#F44336',
              }}></div>
            </div>
            <div>{item.month}</div>
            <div>Passed: {item.passed}</div>
            <div>Failed: {item.failed}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (!impactData) return <div>Loading impact data...</div>;

  return (
    <div className="impact-visualization" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>DAO Impact Visualization</h2>
      {renderBarChart(impactData.treasuryGrowth, 'Treasury Growth', '$')}
      {renderBarChart(impactData.membershipGrowth, 'Membership Growth', 'members')}
      {renderStackedBarChart(impactData.proposalSuccess, 'Proposal Success Rate')}
    </div>
  );
};

export default ImpactVisualization;