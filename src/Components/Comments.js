import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

import "./Comments.css";
const Comments = ({ user, setUsers, users }) => {
  const [open, setOpen] = useState(false);

  const deleteComment = () => {
    setUsers(users.filter((el) => el.id !== user.id));
    console.log(user);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [update, setUpdate] = useState(user.comment);

  const onSubmitUpdate = (e) => {
    e.preventDefault();

    setUsers(...users,  {comment: update} );

    setUpdate("");
    handleClose()
  };

  const updateChange = (e) => {
    setUpdate(e.target.value);
  };

  console.log(user);
  return (
    <div>
      <div className='comments'>
        <div>
          <p>{user.username}</p>
          <p>{user.comment}</p>
        </div>
        <div className='edit-options'>
          <Button onClick={handleOpen}>
            <EditIcon />
          </Button>
          <Button onClick={deleteComment}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className='modal'>
          <Paper elevation={3}>
            <form onSubmit={onSubmitUpdate}>
              <TextField value={update} onChange={updateChange} fullWidth />
              <Button onChange={onSubmitUpdate}>
                <SendIcon />
              </Button>
            </form>
          </Paper>
        </div>
      </Modal>
    </div>
  );
};

export default Comments;
