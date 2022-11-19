import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../../Services/auth.service";
import "../../css/signup.css";

function Signup() {
  const navigate = useNavigate();
  const [companyName, setcompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkValid, setCheckValid] = useState("");
  const [checkLen, setCheckLen] = useState("d-none");
  const [loading, setLoading] = useState(false);
  const info = { companyName, email, contactNumber, password, confirmPassword };

  function validateFormData(e) {
    setLoading(true);
    if (password.length <= 6 || password.length <= 6) {
      setCheckLen("d-inline-block");
      setLoading(false);
    } else if (password !== confirmPassword) {
      setCheckLen("d-none");
      setCheckValid("is-invalid");
      setLoading(false);
    } else {
      setCheckLen("d-none");
      setCheckValid("is-valid");
      const PostInfo = async () => {
        await AuthService.signup(info).then(
          (response) => {
            // check for token and user already exists with 200
            console.log("Sign up successfully", response);
            navigate("/home");
            window.location.reload();
          },
          (error) => {
            console.log(error);
          }
        );
      };

      PostInfo();
    }
  }

  return (
    <>
      <section
        className="d-flex justify-content-center align-items-center p-3"
        id="customSection"
      >
        <div className="card card-body px-4 px-lg-5" id="customCard">
          <div className="d-flex justify-content-center pt-2">
            <h2 className="mb-1">Create an account</h2>
          </div>
          <hr />
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (e.target.checkValidity()) {
                  console.log("...");
                  validateFormData();
                }
              }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Company Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  onChange={(e) => setcompanyName(e.target.value)}
                  placeholder="Enter company name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="johndoe@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  pattern="[0-9]{10}"
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter 10 digit number"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${checkValid}`}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <div className="invalid-feedback">Password do not match.</div>
                <div className={`${checkLen} invalid-feedback`}>
                  Password should be greater than 6 digits.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`form-control ${checkValid}`}
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  required
                />
                <div className="invalid-feedback">Password do not match.</div>
                <div className={`${checkLen} invalid-feedback`}>
                  Password should be greater than 6 digits.
                </div>
              </div>
              <div className="d-flex justify-content-center p-3">
                <button
                  type="submit"
                  className="btn btn-outline-success"
                  id="customBtn"
                >
                  {loading ? (
                    <div className="loader">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
