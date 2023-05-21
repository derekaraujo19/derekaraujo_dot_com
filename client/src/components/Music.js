import React, { useState, useEffect } from "react";
import MusicCard from "./MusicCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Music() {
  const [songs, setSongs] = useState([]);


  useEffect(() => {
    fetch('/api/songs')
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);


  return (
    <div className="MusicPage">
      <Container>
        <Row className="rows">
          {songs.map((song) => (
            <Col lg={12} sm={12} key={song.id} className="px-4 d-flex justify-content-center columns">
              <MusicCard
                key={song.id}
                song={song}
              />
            </Col>

          ))}
        </Row>
        <Row className="rows">
          <div id="disclaimer"> (all songs produced, performed, and written or co-written by derek) </div>
        </Row>
      </Container>

    </div>
  );
}

export default Music;