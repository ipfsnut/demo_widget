// components/GovernanceForum.js

import React, { useState, useEffect } from 'react';

const GovernanceForum = ({ selectedDAO }) => {
  const [discussions, setDiscussions] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    if (selectedDAO) {
      fetchDiscussions(selectedDAO);
    }
  }, [selectedDAO]);

  const fetchDiscussions = async (daoId) => {
    // Simulating API call
    const mockDiscussions = [
      { id: 1, author: 'User1', content: 'What do you think about the new proposal?', timestamp: new Date().toISOString(), replies: [] },
      { id: 2, author: 'User2', content: 'I suggest we focus on community growth next quarter.', timestamp: new Date().toISOString(), replies: [] },
    ];
    setDiscussions(mockDiscussions);
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      const newDiscussion = {
        id: discussions.length + 1,
        author: 'CurrentUser', // In a real app, this would be the logged-in user
        content: newPost,
        timestamp: new Date().toISOString(),
        replies: []
      };
      setDiscussions([...discussions, newDiscussion]);
      setNewPost('');
    }
  };

  return (
    <div className="governance-forum" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Governance Forum</h2>
      <div style={{ marginBottom: '20px' }}>
        {discussions.map(discussion => (
          <div key={discussion.id} style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            <strong>{discussion.author}</strong> - {new Date(discussion.timestamp).toLocaleString()}
            <p>{discussion.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmitPost}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Start a new discussion..."
          style={{ width: '100%', height: '100px', marginBottom: '10px', padding: '5px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Post
        </button>
      </form>
    </div>
  );
};

export default GovernanceForum;