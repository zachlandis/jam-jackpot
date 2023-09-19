import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createGiveaway, giveawayAdded } from "./giveawaysSlice";

function CreateGiveaway() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        giveawayTitle: '',
        giveawayEventDate: '',
        giveawayEventVenue: '',
        giveawayEventLocation: '',
        giveawayEventPoster: '',
    })


    function handleOnChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const payload = {
            title: formData.giveawayTitle,
            event_date: formData.giveawayEventDate,
            event_venue: formData.giveawayEventVenue,
            event_location: formData.giveawayEventLocation,
            event_poster: formData.giveawayEventPoster,
            total_entries: 0,
        }
        dispatch(createGiveaway(payload));

        setFormData({
            giveawayTitle: '',
            giveawayEventDate: '',
            giveawayEventVenue:'',
            giveawayEventLocation:'',
            giveawayEventPoster:'',
        })

        }

    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name="giveawayTitle"
                    type="text"
                    placeholder="Giveaway Title"
                    value={formData.giveawayTitle}
                    onChange={handleOnChange}
                ></input>
                 <input 
                    name="giveawayEventDate"
                    type="date"
                    placeholder="Event Date"
                    value={formData.giveawayEventDate}
                    onChange={handleOnChange}
                ></input>
                 <input 
                    name="giveawayEventVenue"
                    type="text"
                    placeholder="Event Venue"
                    value={formData.giveawayEventVenue}
                    onChange={handleOnChange}
                ></input>
                 <input 
                    name="giveawayEventLocation"
                    type="text"
                    placeholder="Event City, State"
                    value={formData.giveawayEventLocation}
                    onChange={handleOnChange}
                ></input>
                 <input 
                    name="giveawayEventPoster"
                    type="text"
                    placeholder="Event Poster Link"
                    value={formData.giveawayEventPoster}
                    onChange={handleOnChange}
                ></input>
                <input type="submit" value="Create Giveaway"/>
            </form>
        </div>
    )
}

export default CreateGiveaway;