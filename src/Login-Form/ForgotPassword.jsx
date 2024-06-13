import { useState } from "react"; // Import React and useState
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Header from "../Header/Header";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request password reset for", email);
    setSubmitted(true);
  };

  return (
    <div className="login">
      <Header />
      <form onSubmit={handleSubmit} className="form">
        <h2>Forgot Password</h2>
        <div className="input-groups">
          {!submitted ? (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <button type="submit">Submit</button>
            </>
          ) : (
            <p>
              If an account with that <Link to="/login">email</Link> exists, a
              reset link has been sent
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
