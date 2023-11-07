import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import AdminEntries from "./Entries/AdminEntries";
import AdminGiveaways from "./Giveaway/AdminGiveaways";
import AdminPrizes from "./AdminPrizes";
import AdminUsers from "./Users/AdminUsers";
import CreateGiveaway from "./Giveaway/CreateGiveaway";
import { useSelector } from "react-redux";

function AdminDash() {
    const [activeButton, setActiveButton] = useState(localStorage.getItem('activeButton') || 'allGiveaways');
    const currentUser = useSelector((state) => state.users.currentUser);


    function onButtonClick(buttonName) {
        setActiveButton(buttonName);
    }

    if(!currentUser?.admin) return <></>
    
    return (
        <div>
            <ButtonGroup>
                <Button
                    variant={activeButton === 'allGiveaways' ? 'primary' : 'secondary'}
                    onClick={() => onButtonClick('allGiveaways')}
                >
                    All Giveaways
                </Button>
                <Button
                    variant={activeButton === 'allUsers' ? 'primary' : 'secondary'}
                    onClick={() => onButtonClick('allUsers')}
                >
                    All Users
                </Button>
                <Button
                    variant={activeButton === 'allEntries' ? 'primary' : 'secondary'}
                    onClick={() => onButtonClick('allEntries')}
                >
                    All Entries
                </Button>
                {/* <Button
                    {activeButton === 'allPrizes' ? 'primary' : 'secondary'}
                    onClick={() => onButtonClick('allPrizes')}
                >
                    All Prizes
                </Button> */}
                <Button
                    variant={activeButton === 'newGiveaway' ? 'primary' : 'secondary'}
                    onClick={() => onButtonClick('newGiveaway')}
                >
                    New Giveaway
                </Button>
            </ButtonGroup>
            {activeButton === 'allGiveaways' && <AdminGiveaways />}
            {activeButton === 'allUsers' && <AdminUsers />}
            {/* {activeButton === 'allPrizes' && <AdminPrizes />} */}
            {activeButton === 'allEntries' && <AdminEntries />}
            {activeButton === 'newGiveaway' && <CreateGiveaway />}
        </div>
    );
}

export default AdminDash;