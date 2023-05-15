import React, { useState } from "react";

const Register = () => {
  const newUser = useState({
    username: "",
    branch: "",
    semester: "",
    img: "",
    password: "",
  });
  return (
    <div className="register-container">
      <form onSubmit={() => e.preventDefault}>
        <label htmlFor="name">Username : </label>
        <input
          type="text"
          placeholder="name"
          id="name"
          name="name"
          onChange={e.target.value}
          value={e.target.value}
        />
        <label htmlFor="branch">Branch</label>
        <input list="options" />
        <datalist id="options">
          {options.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
      </form>
    </div>
  );
};

export default Register;
