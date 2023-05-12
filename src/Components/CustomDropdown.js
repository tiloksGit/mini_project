import { Link } from "react-router-dom";
import { Dropdown } from "rsuite";
const CustomDropdown = ({ ...props }) => {
  return (
    <Dropdown {...props}>
      <Dropdown.Item>
        <Link to={"/" + props.branch + "_1st_sem"}>
          {props.branch} 1st Semester
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to={"/" + props.branch + "_2nd_sem"}>
          {props.branch} 2nd Semester
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to={"/" + props.branch + "_3rd_sem"}>
          {props.branch} 3rd Semester
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to={"/" + props.branch + "_4th_sem"}>
          {props.branch} 4th Semester
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to={"/" + props.branch + "_5th_sem"}>
          {props.branch} 5th Semester
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to={"/" + props.branch + "_6th_sem"}>
          {props.branch} 6th Semester
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to={"/" + props.branch + "_7th_sem"}>
          {props.branch} 7th Semester
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to={"/" + props.branch + "_8th_sem"}>
          {props.branch} 8th Semester
        </Link>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default CustomDropdown;
