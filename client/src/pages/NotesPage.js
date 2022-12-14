import React from "react";
import Notes from "../components/note/Note";
import Music from "../components/music/Music";
import Timer from "../components/timer/Timer";

const NotesPage = () => {
  return (
    <div>
      <Music />
      <Timer />
      <Notes />
    </div>
  );
};

export default NotesPage;
