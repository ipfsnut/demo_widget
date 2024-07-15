// components/NotificationCenter.js

import React, { useState, useEffect } from 'react';

const NotificationCenter = ({ selectedDAO }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (selectedDAO) {
      fetchNotifications(selectedDAO);
    }
  }, [selectedDAO]);

  const fetchNotifications = async (daoId) => {
    // Simulating API call
    const mockNotifications = [
      { id: 1, message: "New proposal added: 'Increase marketing budget'", timestamp: new Date().toISOString() },
      { id: 2, message: "Voting for 'Update governance rules' ends in 24 hours", timestamp: new Date().toISOString() },
      { id: 3, message: "You've been mentioned in a proposal discussion", timestamp: new Date().toISOString() },
    ];
    setNotifications(mockNotifications);
  };

  return (
    <div className="notification-center" style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {notifications.map(notification => (
            <li key={notification.id} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
              <p>{notification.message}</p>
              <small>{new Date(notification.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationCenter;