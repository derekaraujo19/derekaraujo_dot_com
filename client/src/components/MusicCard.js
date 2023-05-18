
function MusicCard({song}){
  return (
    <div className="MusicCard">
      <h1 className="musicCardText">{song.title}</h1>
      <h3 className="musicCardText">by {song.artist}</h3>
      {/* <h3>{song.year}</h3> */}
      <h2 className="musicCardText">{song.credits}</h2>
      <iframe title={song.title}  src={song.spotify_link} width="600" height="345" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}

export default MusicCard;