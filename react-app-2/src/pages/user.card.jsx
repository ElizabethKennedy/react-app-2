import React from "react"

function UserCard({ user }) {
    if (!user || user.success == false) {
        return <p>No result found</p>;
    }   else  {
        return (
            <div>
                <h2>{user.username}</h2>
                <p>{user.name}</p>
                <p>{user.honor}</p>
                <p>{user.ranks.overall.name}</p>
            </div>
        );
    }

}

export default UserCard;