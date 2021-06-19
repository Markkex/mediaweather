import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";

const Form = ({ input, CommentTextfieldChange, CommentOnSubmitForm }) => {
  return (
    <div className='comments'>
      <form onSubmit={CommentOnSubmitForm}>
        <TextField
          placeholder='Enter a Comment'
          value={input}
          onChange={CommentTextfieldChange}
        />
        <Button color='primary' type='submit'>
          <SendIcon />
        </Button>
      </form>
    </div>
  );
};

export default Form;
