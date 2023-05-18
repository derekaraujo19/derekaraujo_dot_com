import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {


  return (
    <div className="Home">
      <Row className="rows">
        <Col className="columns" lg={{offset:1}} >
          <p id="homeText">IS A NY BASED software engineer & MUSIC PRODUCER. HE received his certificate from flatiron school, and has BEEN RELEASING MUSIC SINCE 2014 UNDER THE ARTIST BANNER <a href="https://open.spotify.com/artist/0RW4vRpFksiQDl8gXO7NPI?si=QccPTEkFTl6JPrMEPPJm8Q" target="_blank" rel='noopener noreferrer' >STRANGETHINGS</a>.</p>
        </Col>
        <Col className="columns" lg={6} >
          <img src="/images/strangethings-01.jpg"
            id="homeImage"
            alt="Derek"
            style={{borderRadius:'3px'}}
          />
        </Col>
      </Row>


    </div>
  );
}

export default Home;