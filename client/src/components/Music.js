import React, { useState, useEffect } from "react";
import MusicCard from "./MusicCard";

function Music() {
  const [songs, setSongs] = useState([]);


  useEffect(() => {
    fetch('/api/songs')
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);


  return (
    <div className="MusicPage">
      {songs.map((song) => (
        <MusicCard
          key={song.id}
          song={song}
        />

      ))}
    </div>
  );
}

export default Music;