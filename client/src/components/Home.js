import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Home() {


  return (
    <div className="Home">
      <Container>
        <Row className="rows">
          <Col className="px-4 columns" xl={6} lg={6} md={12} >
            <p id="homeText">IS A NY BASED software engineer & MUSIC PRODUCER. HE received his certificate from flatiron school, and has BEEN RELEASING MUSIC SINCE 2014 UNDER THE ARTIST BANNER <a href="https://open.spotify.com/artist/0RW4vRpFksiQDl8gXO7NPI?si=QccPTEkFTl6JPrMEPPJm8Q" target="_blank" rel='noopener noreferrer' >STRANGETHINGS</a>.</p>
          </Col>
          <Col className="px-4 columns" xl={6} lg={6} md={12} >
            <img src="/images/strangethings-01.jpg"
              id="homeImage"
              className="img-fluid"
              alt="Derek"
              style={{borderRadius:'3px'}}
            />
          </Col>
        </Row>
      </Container>



    </div>
  );
}

export default Home;