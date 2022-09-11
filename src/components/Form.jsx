import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@material-ui/core";

export default function Form(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [showtextarea, setShowtextarea] = useState(false);
  function changeHandler(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function clickHandler() {
    if (note.title !== "" || note.content !== "") {
      props.onsubmit(note);
      setNote({
        title: "",
        content: "",
      });
    } else {
      alert("Title and Content feilds are empty");
    }
  }
  function textAreaHandler() {
    setShowtextarea(true);
  }
  return (
    <div className="form">
      {showtextarea && (
        <input
          onChange={changeHandler}
          type="text"
          name="title"
          placeholder="Title"
          autoComplete="off"
          value={note.title}
        />
      )}
      <textarea
        onChange={changeHandler}
        name="content"
        placeholder="Take a note..."
        rows={showtextarea ? "3" : "1"}
        value={note.content}
        onClick={textAreaHandler}
      />
      <Zoom in={showtextarea}>
        <Fab onClick={clickHandler}>
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
}
