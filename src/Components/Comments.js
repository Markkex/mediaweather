import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";


import "./Comments.css";
const Comments = ({ user, setUsers, users }) => {
  
  const handleDeleteClick = (id) => {
    const removeItem = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(removeItem);
  };
    
  return (
    <div>
      <div className='comments'>
        <div>
          <p>{user.username}</p>
          <p>{user.comment}</p>
        </div>
        <div className='edit-options'>
          <Button>
            <EditIcon />
          </Button>
          <Button onClick={() => handleDeleteClick(user.id)}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
