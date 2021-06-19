import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./Comments.css";

const Comments = ({ user, handleCommentClick, handleDeleteClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className='comments'>
        <div>
          <Avatar alt={user.username} src={user.avatarimg} />
        </div>
        <div className="user-info">
          <p><b>{user.username}</b></p>
          <p>{user.comment}</p>
        </div>
        <div className='edit-options'>
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <Button onClick={() => handleCommentClick(user)}>
              <EditIcon />
            </Button>
            <Button onClick={() => handleDeleteClick(user.id)}>
              <DeleteIcon />
            </Button>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Comments;
