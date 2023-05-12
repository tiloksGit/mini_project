import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      Navigation Section
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="cse">Computer Science Engineering</Link>
        </li>
        <li>
          <Link>Electrical Engineering</Link>
        </li>
        <li>
          <Link>Mechanical Engineering</Link>
        </li>
        <li>
          <Link>Instrumentation Engineering</Link>
        </li>
        <li>
          <Link>Civil Engineering</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
