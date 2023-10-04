import React, { useState } from "react";
import "./Mobileregister.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth_context";

const Mobileregister = () => {
  const navigate = useNavigate();
  const { mobileNumber, setMobileNumber, login } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: mobileNumber,
    confirmPassword: "",
  });
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setPasswordMatch(true);
      axios
        .post("http://localhost:4000/api/auth/register", {
          username: formData.username,
          mobile: formData.mobile,
          password: formData.password,
        })
        .then((res) => {
          if (res.status === 201) {
            const { token } = res.data;
            localStorage.setItem("jwt", token);
            login(token);
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="form-container">
      <h1 className="heading-color">Mobile Register</h1>
      <form onSubmit={handleSubmit}>
        <label className="label-field" htmlFor="username">
          Username
        </label>
        <input
          className="text-field"
          type="text"
          name="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
        <label className="label-field" htmlFor="password">
          Password
        </label>
        <input
          className="text-field"
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <label className="label-field" htmlFor="Confirm Password">
          Confirm Password
        </label>
        <input
          className="text-field"
          type="text"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {passwordMatch ? null : (
          <div>
            <p>Passwords do not match.</p>
          </div>
        )}
        <br />
        <button className="register-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Mobileregister;
