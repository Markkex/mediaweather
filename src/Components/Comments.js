import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";


import "./Comments.css";
const Comments = ({ user, handleCommentClick, handleDeleteClick }) => {
  
 
    
  return (
    <div>
      <div className='comments'>
        <div>
          <p>{user.username}</p>
          <p>{user.comment}</p>
        </div>
        <div className='edit-options'>
          <Button onClick={() => handleCommentClick(user)}>
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
