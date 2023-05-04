import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Service from "./views/Service";

import Navbar from "./components/Navbar";
import ServicesLayout from "./views/ServicesLayout";
import Home from "./views/Home";
import CreateService from "./views/CreateService";
import SignIn from "./views/auth/SignIn";
import SignUp from "./views/auth/SignUp";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="bg-slate-800 w-screen h-full">
          <Navbar />
          <Routes>
            {/* AUTH PATHS */}
            <Route path="/auth/signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            {/* ADMIN PATHS */}
            <Route path="/admin/create" element={<CreateService />} />
            <Route
              path="/admin/update/:serviceId"
              element={<CreateService update={true} />}
            />
            {/* MAIN SERVICES PATHS */}
            <Route path="/" element={<Home />} />
            <Route path="/services/categories" element={<ServicesLayout />}>
              <Route path=":category">
                <Route path=":service" element={<Service />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
