import { React, useState} from "react";

function GiveawayEntries() {
    const [entries, setEntries] = useState(0)


    function handleActionComplete() {
        console.log("Action Complete");
    }

    return (
        <div>
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
                        border: 'none',
                        overflow: 'hidden',
                        width: '100%',
                    }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                </div>
                <div className="giveaway-entry-column">
                    <button onClick={handleActionComplete}>Complete!</button>
                </div>
            </div>
            <br/>
            <div className="giveaway-entry-container">
            <div className="giveaway-entry-column">
                <h4>Follow Party Guru Productions on Facebook</h4>
            </div>
            <div className="giveaway-entry-column">
                <a href="https://www.instagram.com/your-instagram-page/" target="_blank" className="instagram-button">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-png-full-colour-glyph.png" alt="Instagram Logo" />
                </a>
            </div>
            <div className="giveaway-entry-column">
                <button onClick={handleActionComplete}>Complete!</button>
            </div>
        </div>
        </div>
    );
}

export default GiveawayEntries;
