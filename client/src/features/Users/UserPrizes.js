import React from 'react'

function UserPrizes({ currentUser }) {
  return (
    <div className="prizes-section">
        <h2>Your Prizes</h2>
        {currentUser.prev_wins && currentUser.prev_wins.length > 0 ? (
            <ul>
            {currentUser.prev_wins.map((win) => (
                <li key={win.prize?.id}>
                    <a href={`/giveaways/${win.prize.giveaway?.id}`}>
                        {win.prize?.prize_name}
                    </a>
                </li>
            ))}
            </ul>
        ) : (
            <p>No prizes found.</p>
        )}
    </div>
  )
}

export default UserPrizes