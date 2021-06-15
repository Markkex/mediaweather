import React from 'react'

const Comments = ({users, setUsers}) => {
    console.log(users)
    return (
        <div> 
            {users.map((user) => (
                <div>
                    <p>{user.username}</p>
                    <p>{user.comment}</p>
                </div>
            ))}
        </div>
    )
}

export default Comments
