import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import AdminEntries from "./AdminEntries";
import AdminGiveaways from "./AdminGiveaways";
import AdminPrizes from "./AdminPrizes";
import AdminUsers from "./AdminUsers";
import CreateGiveaway from "./CreateGiveaway";

function AdminDash() {
    const [activeButton, setActiveButton] = useState('allGiveaways')

    function onButtonClick(buttonName) {
        // console.log("this works")
        setActiveButton(buttonName)
    }

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
                    variant={activeButton === 'allPrizes' ? 'primary' : 'secondary'}
                    onClick={() => onButtonClick('allPrizes')}
                >
                    All Prizes
                </Button>
                <Button
                    variant={activeButton === 'allEntries' ? 'primary' : 'secondary'}
                    onClick={() => onButtonClick('allEntries')}
                >
                    All Entries
                </Button>
                <Button
                    variant={activeButton === 'newGiveaway' ? 'primary' : 'secondary'}
                    onClick={() => onButtonClick('newGiveaway')}
                >
                    New Giveaway
                </Button>
            </ButtonGroup>
            {activeButton === 'allGiveaways' && <AdminGiveaways />}
            {activeButton === 'allUsers' && <AdminUsers />}
            {activeButton === 'allPrizes' && <AdminPrizes />}
            {activeButton === 'allEntries' && <AdminEntries />}
            {activeButton === 'newGiveaway' && <CreateGiveaway />}

        </div>
    )
}

export default AdminDash;