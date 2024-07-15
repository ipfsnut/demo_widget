import React, { useState } from 'react';

const Delegation = ({ userStakedAmount, onDelegate }) => {
  const [selectedDelegate, setSelectedDelegate] = useState('');
  const [amountToDelegate, setAmountToDelegate] = useState(0);

  const placeholderDelegates = [
    { id: 1, name: 'Entity A' },
    { id: 2, name: 'Entity B' },
    { id: 3, name: 'Entity C' },
  ];

  const handleDelegation = () => {
    if (selectedDelegate && amountToDelegate > 0) {
      onDelegate(selectedDelegate, amountToDelegate);
    }
  };

  return (
    <div className="delegation">
      <h2>Delegation</h2>
      <p>Your staked $PAGE: {userStakedAmount}</p>
      <select 
        value={selectedDelegate} 
        onChange={(e) => setSelectedDelegate(e.target.value)}
      >
        <option value="">Select a delegate</option>
        {placeholderDelegates.map(delegate => (
          <option key={delegate.id} value={delegate.id}>{delegate.name}</option>
        ))}
      </select>
      <input 
        type="number" 
        value={amountToDelegate} 
        onChange={(e) => setAmountToDelegate(Number(e.target.value))}
        max={userStakedAmount}
      />
      <button onClick={handleDelegation}>Delegate</button>
    </div>
  );
};

export default Delegation;