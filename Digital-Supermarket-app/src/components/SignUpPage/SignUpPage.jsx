import { useState } from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    noAds: false,
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.username || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    // Simulate successful signup
    setSuccess(true);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {success ? (
          <div className="success-message">You have successfully signed up!</div>
        ) : (
          <>
            <h1>Sign up</h1>
            <p className="subtitle">
              Create an account or <a href="#">Sign in</a>
            </p>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="noAds"
                  name="noAds"
                  checked={formData.noAds}
                  onChange={handleChange}
                />
                <label htmlFor="noAds">
                  I do not want to receive emails with advertising news,
                  suggestions or marketing promotions
                </label>
              </div>

              <button type="submit" className="signup-button">
                Sign up
              </button>
            </form>

            <p className="terms">
              By signing up to create an account, you are accepting our{" "}
              <a href="#">terms of service</a> and{" "}
              <a href="#">privacy policy</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
