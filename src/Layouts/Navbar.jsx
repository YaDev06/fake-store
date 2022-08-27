import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          Fake Store
        </a>
        <div className="navbar-nav"></div>
      </div>
    </nav>
  );
};

export default Navbar;
