import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import ReplayIcon from "@material-ui/icons/Replay";

const EditCommentForm = ({
  handleEditFormSubmit,
  handleEditInputChange,
  currentComment,
  setIsEditing,
}) => {
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <TextField
          name='editComment'
          type='text'
          placeholder='Edit Comment'
          value={currentComment.comment}
          onChange={handleEditInputChange}
        />
        <Button color='primary' type='submit'>
          <CheckIcon />
        </Button>
        <Button color="primary" onClick={() => setIsEditing(false)}>
          <ReplayIcon />
        </Button>
      </form>
    </div>
  );
};

export default EditCommentForm;
