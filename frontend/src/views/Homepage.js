import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";

const Homepage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGetStarted = (event) => {
    event.preventDefault();

    if (user) {
      Swal.fire({
        title: "Already logged in",
        text: "Please log out first and then try again.",
        icon: "info",
        toast: true,
        timer: 4000,
        position: "top-end",
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }

    navigate("/register");
  };

  return (
    <div>
      <>
        <main role="main" style={{ marginTop: 50 }}>
          {/* Hero Section */}
          <div className="jumbotron">
            <div className="container">
              <h1 className="display-3">
                Django + React Authentication System
              </h1>

              <p>
                This is a full-stack authentication system built using
                <b> Django REST Framework (backend)</b> and
                <b> React.js (frontend)</b>. It includes JWT-based
                authentication, protected routes, and secure API integration.
              </p>

              <p>
                Features include user registration, login, token refresh,
                protected dashboard access, and Axios interceptors for seamless
                authentication handling.
              </p>

              <p>
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleGetStarted}
                  type="button"
                >
                  Get Started »
                </button>
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="container">
            <div className="row">
              {/* Feature 1 */}
              <div className="col-md-4">
                <h2>🔐 Secure Authentication</h2>
                <p>
                  Implements JWT (JSON Web Token) authentication using Django
                  REST Framework. Users get secure login, signup, and
                  token-based session management.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    Learn More »
                  </a>
                </p>
              </div>

              {/* Feature 2 */}
              <div className="col-md-4">
                <h2>⚛️ React Frontend</h2>
                <p>
                  Built with React.js using hooks, context API, and protected
                  routes. Axios interceptors handle token refresh automatically
                  for smooth UX.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    Learn More »
                  </a>
                </p>
              </div>

              {/* Feature 3 */}
              <div className="col-md-4">
                <h2>🚀 REST API Backend</h2>
                <p>
                  Django REST Framework powers the backend API, handling
                  authentication, user management, and secure communication
                  between frontend and backend.
                </p>
                <p>
                  <a className="btn btn-secondary" href="#" role="button">
                    Learn More »
                  </a>
                </p>
              </div>
            </div>

            <hr />
          </div>
        </main>

        {/* Footer */}
        <footer className="container">
          <p>
            © {new Date().getFullYear()} Django + React Auth System | Built by
            Salman
          </p>
        </footer>
      </>
    </div>
  );
};

export default Homepage;
