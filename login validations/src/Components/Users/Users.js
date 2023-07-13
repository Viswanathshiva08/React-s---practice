import React from "react";
import User from "../User/User";

const Users=({users,onDelete}) => {

    return(
        <div >

        {users.map((user) => (
            <User key={user.name}
            user={user}
            onDelete={onDelete}>
            </User>
        ))}

        </div>
    )
}

export default Users