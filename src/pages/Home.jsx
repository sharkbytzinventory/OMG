import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail, MdVisibility, MdVisibilityOff } from "react-icons/md";

import styled from "styled-components";
import ApplayOut from "./AppLayOut";
import Navbar from "../Navbar";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // Reset state when the component mounts
  useEffect(() => {
    setName({ email: "", password: "" });
  }, []);

  const validForm = () => {
    let valid = true;
    const newError = { ...error };
    if (name.email.trim() === "") {
      newError.email = "*Email is required";
      valid = false;
    } else {
      newError.email = "";
    }
    if (name.password.trim() === "") {
      newError.password = "*Password is required";
      valid = false;
    } else {
      newError.password = "";
    }
    setError(newError);
    return valid;
  };

  const inputEvent = (e) => {
    const { value, name: inputName } = e.target;
    setName((preValue) => ({
      ...preValue,
      [inputName]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [records, setRecords] = useState([]);

  const onSubmits = (e) => {
    e.preventDefault();
    const newRecord = { ...name, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    console.log(setRecords);
    console.log("Login with", name);
    if (validForm()) {
      alert("Success!!!!");
      setName({ email: "", password: "" });
      setIsLogin(true);
      setLoggedInUser(name.email);
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="login">
        {isLogin ? (
          <>
            <ApplayOut />
          </>
        ) : (
          <>
            <Navbar />
            <StyledDiv>
              <div className="container shadow d-flex">
                <div className="img">
                  <img
                    src="login-v2.svg"
                    alt="imges logo"
                    style={{ width: "80%", height: "80vh" }}
                  ></img>
                </div>

                <form onSubmit={onSubmits} className="forms">
            
                    <h2>Sign-in</h2>
                    <div className="input-groups">
                      <div>
                        <input
                          type="email"
                          placeholder="Email"
                          name="email"
                          onChange={inputEvent}
                          value={name.email}
                        />
                        <MdEmail className="icon" />
                      </div>
                      <span className="error">{error.email}</span>
                    </div>

                    <div className="input-groups">
                      <div>
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          name="password"
                          onChange={inputEvent}
                          value={name.password}
                        />
                        {showPassword ? (
                          <MdVisibilityOff
                            className="icon"
                            onClick={togglePasswordVisibility}
                          />
                        ) : (
                          <MdVisibility
                            className="icon"
                            onClick={togglePasswordVisibility}
                          />
                        )}
                      </div>
                      <span className="error">{error.password}</span>
                    </div>
                    <div className="switch">
                      <Link
                        to="/forgot"
                        style={{ textDecoration: "none", float: "right" }}
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <button className="buton" type="submit">Sign-in</button>
                
                </form>
              </div>
            </StyledDiv>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
