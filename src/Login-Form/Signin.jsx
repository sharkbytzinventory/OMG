import  { useEffect, useState } from "react";
import Header from "../Header/Header";
import Login from "./Login";
import "./Sign.css";

function Signin() {
  const [login, setLogin] = useState(false);

  const [sign, setSign] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  useEffect(() => {
    setSign({ email: "", password: "", confirm: "" });
  }, []);

  const validForm = () => {
    let valid = true;
    const newError = { ...error };
    if (sign.email.trim() === "") {
      newError.email = "*Email is required";
      valid = false;
    } else {
      newError.email = "";
    }
    if (sign.password.trim() === "") {
      newError.password = "*Password is required";
      valid = false;
    } else {
      newError.password = "";
    }

    if (sign.password !== sign.confirm) {
      newError.confirm = "*not match password";
      valid = false;
    } else {
      newError.confirm = "";
    }
    setError(newError);
    return valid;
  };

  const inputEvent = (e) => {
    const { value, name: inputName } = e.target;
    setSign((preValue) => ({
      ...preValue,
      [inputName]: value,
    }));
  };
  const [records, setRecords] = useState([]);

  const onSubmits = (e) => {
    e.preventDefault();
    const newRecord = { ...sign, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    console.log(setRecords);
    console.log("Signin with", sign);
    if (validForm()) {
      alert("Signin Success!!!!");
      setSign({ email: "", password: "" });
      setLogin(true);
    }
  };

  return (
    <div className="login">
      {login ? (
        <>
          <Login />
        </>
      ) : (
        <>
          <Header />{" "}
          <form onSubmit={onSubmits} className="form">
            <h2>Sign Up</h2>
            <div className="input-group">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={sign.email}
                  onChange={inputEvent}
                />
              </div>
              <span className="error">{error.email}</span>
            </div>
            <div className="input-group">
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={sign.password}
                  onChange={inputEvent}
                />
              </div>
              <span className="error">{error.password}</span>
            </div>
            <div className="input-group">
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm"
                  value={sign.confirm}
                  onChange={inputEvent}
                />
              </div>
              <span className="error">{error.confirm}</span>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Signin;
