import { Link } from "react-router-dom";
import "../styles/sidebar.css";
const Sidebar = () => {
  return (
    <div className="NavBody-parent">
      <ul>
        <Link to="/exclusive/">
          <li>Home</li>
        </Link>
        <Link to="/exclusive/cse">
          <li>Computer Science Engineering</li>
        </Link>
        <Link to="/exclusive/ee">
          <li>Electrical Engineering</li>
        </Link>
        <Link to="/exclusive/me">
          <li>Mechanical Engineering</li>
        </Link>
        <Link to="/exclusive/ie">
          <li>Instrumentation Engineering</li>
        </Link>
        <Link to="/exclusive/ce">
          <li>Civil Engineering</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
