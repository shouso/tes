import React, { useState } from 'react';

const QueueApp = () => {
  const [queue, setQueue] = useState([]);
  const [name, setName] = useState('');
  const [joinedId, setJoinedId] = useState(null);

  const joinQueue = () => {
    if (!name) return;
    const newEntry = { id: Date.now(), name };
    setQueue(prevQueue => [...prevQueue, newEntry]);
    setJoinedId(newEntry.id);
    setName('');
  };

  const leaveQueue = () => {
    setQueue(prevQueue => prevQueue.filter(entry => entry.id !== joinedId));
    setJoinedId(null);
  };

  const userPosition = joinedId
    ? queue.findIndex(entry => entry.id === joinedId) + 1
    : null;

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 32 }}>
      <h2>Queue for Public Space</h2>
      {!joinedId ? (
        <div>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
            style={{ padding: 8, marginRight: 8 }}
          />
          <button onClick={joinQueue} style={{ padding: 8 }}>
            Join Queue
          </button>
        </div>
      ) : (
        <div>
          <p>
            You are in the queue! Your position: <b>{userPosition}</b>
          </p>
          <button onClick={leaveQueue} style={{ padding: 8, marginTop: 8 }}>
            Leave Queue
          </button>
        </div>
      )}

      <h3 style={{ marginTop: 32 }}>Current Queue:</h3>
      <ol>
        {queue.map((entry, idx) => (
          <li key={entry.id}>
            {idx + 1}. {entry.name}
            {entry.id === joinedId && ' (You)'}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default QueueApp;