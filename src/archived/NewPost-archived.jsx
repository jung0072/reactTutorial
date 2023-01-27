import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./NewPost.module.css";
import Modal from "../component/Modal";

function NewPost() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }
  function changeNameHandler(event) {
    setEnteredName(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    let postData = {
      body: enteredBody,
      name: enteredName,
    };
    onCancel();
  }
  
  const navigate = useNavigate();
  function onCancel() {
    navigate("..");
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={onSubmit}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={changeNameHandler} />
        </p>
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;

export function action() {
  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}