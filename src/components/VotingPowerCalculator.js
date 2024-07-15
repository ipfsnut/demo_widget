// components/VotingPowerCalculator.js

import React, { useState } from 'react';

const VotingPowerCalculator = ({ votingPower, totalStaked }) => {
  const [additionalStake, setAdditionalStake] = useState(0);

  const calculateNewVotingPower = () => {
    const currentPowerPercentage = (votingPower / totalStaked) * 100;
    const newTotalStaked = totalStaked + Number(additionalStake);
    const newVotingPower = ((votingPower + Number(additionalStake)) / newTotalStaked) * 100;
    return newVotingPower.toFixed(2);
  };

  return (
    <div className="voting-power-calculator" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Voting Power Calculator</h2>
      <p>Your current voting power: {votingPower} tokens ({((votingPower / totalStaked) * 100).toFixed(2)}% of total)</p>
      <div>
        <label htmlFor="additionalStake">Calculate voting power with additional stake: </label>
        <input
          type="number"
          id="additionalStake"
          value={additionalStake}
          onChange={(e) => setAdditionalStake(e.target.value)}
          min="0"
        />
        <p>New voting power would be: {calculateNewVotingPower()}% of total</p>
      </div>
    </div>
  );
};

export default VotingPowerCalculator;