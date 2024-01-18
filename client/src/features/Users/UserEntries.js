import React from 'react';

function UserEntries({ currentUser }) {
  return (
    <div className="entries-section">
      <h2>Your Entries</h2>
      {currentUser.entries && currentUser.entries.length > 0 ? (
        <ul>
          {Array.from(new Set(currentUser.entries.map((entry) => entry.giveaway?.title))).map((title) => (
            <li key={title}>
              <a href={`/giveaways/${currentUser.entries.find((entry) => entry.giveaway?.title === title).giveaway?.id}`}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No entries found.</p>
      )}
    </div>
  );
}

export default UserEntries;
