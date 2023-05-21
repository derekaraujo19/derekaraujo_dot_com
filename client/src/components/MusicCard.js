
function MusicCard({song}){
  return (
    <div className="MusicCard">
      <h2 className="musicCardText">{song.title}</h2>
      <h4 className="musicCardText" id="musicCardArtist">by {song.artist}</h4>
      <p className="musicCardText" id="musicCardYear"> released in {song.year}</p>
      {/* <h4 className="musicCardText" id="musicCardCredits">{song.credits}</h4> */}
      <iframe title={song.title} id="musicPlayer" className="img-fluid" src={song.spotify_link} width="600" height="345" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}

export default MusicCard;