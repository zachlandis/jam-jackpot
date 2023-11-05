import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEntries, createEntry } from "./EntriesSlice";

function GiveawayEntries({ giveawayId, giveawayTitle }) {
    const [entries, setEntries] = useState(0);
    const [completedActions, setCompletedActions] = useState([]);
    const [fbButtonDisabled, setFbButtonDisabled] = useState(false);
    const [igButtonDisabled, setIgButtonDisabled] = useState(false);

    const currentUser = useSelector((state) => state.users.currentUser);
    const allEntries = useSelector((state) => state.entries.entities);
    const currentEntries = allEntries.filter(
        (entry) => entry?.giveaway?.id === giveawayId
    );

    const currentUserEntries = currentEntries.filter(entry=> entry.user_id === currentUser.id);
    const currentUserHasEnteredFacebook =  currentUserEntries.some(entry => entry.entry_type ==='Facebook')
    const currentUserHasEnteredInstagram =  currentUserEntries.some(entry => entry.entry_type ==='Instagram')

    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEntries());
    }, [dispatch]);

    async function addEntry (entry_type){
        const entrySaved = await dispatch(
            createEntry({
                entry: giveawayTitle,
                giveaway_id: giveawayId,
                entry_type,
            }));

        }

    function handleActionComplete(action) {
        if (!completedActions.includes(action)) {
        // setEntries(entries +1);
        // setCompletedActions([...completedActions, action]);
            try {
                if (action === "Follow PGP FB") {
                console.log("FB");
                // setFbButtonDisabled(true);
                addEntry(0)
                } else if (action === "Follow PGP IG") {
                addEntry(1)
                console.log("IG");
                // setIgButtonDisabled(true)
                }
            } catch (error) {}
        }
    }

    return (
        <div>
        <div className="entries-counter">
            <strong>Your Entries:</strong> {currentUserEntries.length}
        </div>
        <div></div>
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
            <button onClick={() => 
                !currentUserHasEnteredFacebook && 
                handleActionComplete("Follow PGP FB")}>

                {currentUserHasEnteredFacebook? "Already Entered" : "Complete!"}

            </button>
            </div>
        </div>
        <br />
        <div className="giveaway-entry-container">
            <div className="giveaway-entry-column">
            <h4>Follow Party Guru Productions on Facebook</h4>
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
            <button onClick={() => 
                !currentUserHasEnteredInstagram && 
                handleActionComplete("Follow PGP IG")}>

                {currentUserHasEnteredInstagram? "Already Entered" : "Complete!"}

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
                            {`${entry.user.first_name} - ${new Date(entry.entry_date).toLocaleString()}`}
                        </li>
                    ))}
            </ul>
        </div>
    </div>
    );
}

export default GiveawayEntries;