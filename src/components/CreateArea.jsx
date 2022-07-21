import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [Expansion, setBool] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setBool(false);
    event.preventDefault();
  }
  function Expand() {
    setBool(true);
  }
  return (
    <div>
      <form className="create-note">
        {Expansion && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={Expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={Expansion ? "3" : "1"}
        />
        <Zoom in={true}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
