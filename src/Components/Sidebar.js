import { Link } from "react-router-dom";
import "../styles/sidebar.css";
const Sidebar = () => {
  return (
    <div className="NavBody-parent">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/cse">
          <li>Computer Science Engineering</li>
        </Link>
        <Link to="/ee">
          <li>Electrical Engineering</li>
        </Link>
        <Link to="/me">
          <li>Mechanical Engineering</li>
        </Link>
        <Link to="/ie">
          <li>Instrumentation Engineering</li>
        </Link>
        <Link to="/ce">
          <li>Civil Engineering</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
