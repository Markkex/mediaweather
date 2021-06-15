import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import "./Comments.css"
const Comments = ({ users, setUsers }) => {
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <div className='comments'>
          <div>
            <p>{user.username}</p>
            <p>{user.comment}</p>
          </div>
          <div className="edit-options">
            <Button>
              <EditIcon />
            </Button>
            <Button>
              <DeleteIcon />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
