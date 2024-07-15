// components/CharmverseDiscussion.js

import React from 'react';

const CharmverseDiscussion = ({ selectedDAO }) => {
  // You'll need to replace this with the actual Charmverse URL structure
  const charmverseUrl = `https://app.charmverse.io/page-dao/page/${selectedDAO}-governance-forum`;

  return (
    <div className="charmverse-discussion" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Governance Discussion</h2>
      <iframe
        src={charmverseUrl}
        width="100%"
        height="600px"
        frameBorder="0"
        title="Charmverse Governance Discussion"
      ></iframe>
    </div>
  );
};

export default CharmverseDiscussion;