import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import "./Comments.css"
const Comments = ({ user, setUsers, users }) => {
  const deleteComment = () => {
    setUsers(users.filter((el) => el.id !== user.id));
    console.log(user)
  }

  console.log(user);
  return (
    <div>
        <div className='comments'>
          <div>
            <p>{user.username}</p>
            <p>{user.comment}</p>
          </div>
          <div className="edit-options">
            <Button>
              <EditIcon />
            </Button>
            <Button onClick={deleteComment}>
              <DeleteIcon />
            </Button>
          </div>
        </div>
      
    </div>
  );
};

export default Comments;
