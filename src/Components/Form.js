import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import "./Form.css";
const Form = ({ setUsers, users }) => {
  const [input, setInput] = useState("");
  const textfieldChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (input !== "") {
      setUsers([
        ...users,
        { id: Math.random() * 1000, username: "Flyaway", comment: input.trim() },
      ]);
    }

    setInput("");
  };

  return (
    <div className='comments'>
      <form onSubmit={onSubmit}>
        <TextField
          placeholder='Enter a Comment'
          value={input}
          onChange={textfieldChange}
        ></TextField>
        <Button color='primary' onClick={onSubmit}>
          <SendIcon />
        </Button>
      </form>
    </div>
  );
};

export default Form;
