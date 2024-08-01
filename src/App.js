import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import User from "./Pages/Userprofile";
import { ProSidebarProvider } from 'react-pro-sidebar';
import TermsAndConditions from "./Pages/TermsandConditions";
import Admin from "./Pages/Admindashboard";
import OwnerDashboard from "./Pages/OwnerDashboard";

function App() {
  return (
    <ProSidebarProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/owner" element={<OwnerDashboard />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </Router>
    </ProSidebarProvider>

  );
}

export default App;
