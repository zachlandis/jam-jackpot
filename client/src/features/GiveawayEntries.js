import React from "react";

function GiveawayEntries() {

    function handleLikeFB() {
        console.log("FBLike clicked")
    }


    return (
        <div className="giveaway-entries">
            <form>
                <div>
                    <p>"Like" Party Guru Productions on Facebook</p>
                    <button
                        onClick={handleLikeFB}
                    >Complete!</button>
                </div>
            </form>
        </div>
    )
}

export default GiveawayEntries;