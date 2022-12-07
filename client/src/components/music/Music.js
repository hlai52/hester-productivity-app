import React from "react";
import ReactPlayer from "react-player";
import "./Music.scss";

function Music() {
  return (
    <div className="music">
      <ReactPlayer
        url="https://soundcloud.com/spiritualmoment/1h-relaxing-music-for-stress-relief-and-meditation-calm-music-for-healing-therapy-sleep-yoga?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
        className="music__box"
      />
    </div>
  );
}

export default Music;
