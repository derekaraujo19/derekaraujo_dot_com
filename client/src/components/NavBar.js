import {NavLink} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar() {
  return (
    <div className="Nav">
      <Row>
        <Col>
          <NavLink to="/about" className="nav_link" >ABOUT </NavLink>
          <NavLink to="/projects" className="nav_link" > | PROJECTS | </NavLink>
          <NavLink to="/music" className="nav_link" > MUSIC </NavLink>
        </Col>
      </Row>

    </div>
  );
}
export default NavBar;