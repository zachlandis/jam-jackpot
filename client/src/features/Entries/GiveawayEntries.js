import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEntries, createEntry } from "../Reducers/EntriesSlice";

function GiveawayEntries({ giveawayId, giveawayTitle }) {
  const [completedActions, setCompletedActions] = useState([]);
  const currentUser = useSelector((state) => state.users.currentUser);
  const allEntries = useSelector((state) => state.entries.entities);
  const currentEntries = allEntries.filter(
    (entry) => entry?.giveaway?.id === giveawayId
  );
  const currentUserEntries = currentEntries.filter(
    (entry) => entry.user_id === currentUser.id
  );
  const currentUserHasEnteredFacebook = currentUserEntries.some(
    (entry) => entry.entry_type === "Facebook"
  );
  const currentUserHasEnteredInstagram = currentUserEntries.some(
    (entry) => entry.entry_type === "Instagram"
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntries());
  }, [dispatch]);

  async function addEntry(entryType) {
    await dispatch(
      createEntry({
        entry: giveawayTitle,
        giveaway_id: giveawayId,
        entry_type: entryType,
      })
    );
  }

  function handleActionComplete(action) {
    if (!completedActions.includes(action)) {
      try {
        if (action === "Follow PGP FB") {
          addEntry("Facebook");
        } else if (action === "Follow PGP IG") {
          addEntry("Instagram");
        }
        setCompletedActions([...completedActions, action]);
      } catch (error) {}
    }
  }

  return (
    <div>
      <div className="entries-counter">
        <strong>Your Entries:</strong> {currentUserEntries.length}
      </div>
      <div className="giveaway-entry-container">
        <div className="giveaway-entry-column">
          <h4>Follow Party Guru Productions on Facebook</h4>
        </div>
        <div className="giveaway-entry-column">
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fpartyguruproductions%2F&width=450&layout&action&size&share=true&height=35&appId=663326714487527"
            width="450"
            height="22"
            style={{
              border: "none",
              overflow: "hidden",
              width: "100%",
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="giveaway-entry-column">
          <button
            onClick={() =>
              !currentUserHasEnteredFacebook &&
              handleActionComplete("Follow PGP FB")
            }
            disabled={currentUserHasEnteredFacebook}
          >
            {currentUserHasEnteredFacebook ? "Already Entered" : "Complete!"}
          </button>
        </div>
      </div>
      <br />
      <div className="giveaway-entry-container">
        <div className="giveaway-entry-column">
          <h4>Follow Party Guru Productions on Instagram</h4>
        </div>
        <div className="giveaway-entry-column">
          <a
            href="https://www.instagram.com/partyguruproductions/"
            target="_blank"
            className="instagram-button"
          >
            <img
              src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-png-full-colour-glyph.png"
              alt="Instagram Logo"
            />
          </a>
        </div>
        <div className="giveaway-entry-column">
          <button
            onClick={() =>
              !currentUserHasEnteredInstagram &&
              handleActionComplete("Follow PGP IG")
            }
            disabled={currentUserHasEnteredInstagram}
          >
            {currentUserHasEnteredInstagram ? "Already Entered" : "Complete!"}
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="current-entries">
        <h1>Current Entries ({currentEntries.length})</h1>
        <ul>
          {currentEntries
            .slice()
            .sort((a, b) => new Date(b.entry_date) - new Date(a.entry_date))
            .map((entry) => (
              <li key={entry.id}>
                {`${entry.user.first_name} - ${new Date(
                  entry.entry_date
                ).toLocaleString()}`}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default GiveawayEntries;
