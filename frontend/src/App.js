import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

import Homepage from "./views/Homepage";
import Registerpage from "./views/Registerpage";
import Dashboard from "./views/Dashboard";
import Loginpage from "./views/Loginpage";
import Navbar from "./views/Navbar";


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
