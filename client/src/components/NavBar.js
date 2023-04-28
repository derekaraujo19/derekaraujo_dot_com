import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className="Nav">
      <NavLink to="/about" className="nav_link" >ABOUT </NavLink>
      <NavLink to="/projects" className="nav_link" > | PROJECTS | </NavLink>
      <NavLink to="/music" className="nav_link" > MUSIC </NavLink>
    </div>
  );
}
export default NavBar;