import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, comments, shares }) {
  const [playing, setplaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setplaying(false);
    } else {
      videoRef.current.play();
      setplaying(true);
    }
  };

  return (
    <div className="video">
      <video
        src={url}
        preload
        className="video__player"
        loop
        // controls
        ref={videoRef}
        onClick={onVideoPress}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} comments={comments} shares={shares} />
    </div>
  );
}

export default Video;
