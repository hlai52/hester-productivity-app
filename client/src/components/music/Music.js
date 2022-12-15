import React from "react";
import ReactPlayer from "react-player";
import "./Music.scss";

function Music() {
  return (
    <div className="music">
      <ReactPlayer url="https://soundcloud.com/spiritualmoment/relaxing-music-for-stress-relief-calm-music-for-sleep-meditation-healing-therapy-study-spa-yoga" />
    </div>
  );
}

export default Music;
