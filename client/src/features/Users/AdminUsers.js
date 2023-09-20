import React from "react";
import { useSelector } from "react-redux";

function AdminUsers() {

    const users = useSelector((state) => state.users.entities)

    console.log(users)
    return (
        <h1>Admin Users</h1>
    )
}

export default AdminUsers;