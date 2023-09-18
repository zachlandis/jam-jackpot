import React from "react";

function GiveawayList( giveaways = []) {

    return (
        <div>
            {giveaways.map((giveaway) => (
                <li key={giveaway.id}>{giveaway.title}</li>
             ))};
        </div>
    )
}

export default GiveawayList;