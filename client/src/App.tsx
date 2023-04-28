import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Service from "./views/Service";

import Navbar from "./components/Navbar";
import ServicesLayout from "./views/ServicesLayout";
import Home from "./views/Home";
import CreateService from "./views/CreateService";

function App() {
  return (
    <Router>
      <div className="bg-slate-800 w-screen h-full">
        <Navbar />
        <Routes>
          <Route path="/admin/create" element={<CreateService />} />
          <Route
            path="/admin/update/:serviceId"
            element={<CreateService update={true} />}
          />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/categories" element={<ServicesLayout />}>
            <Route path=":category">
              <Route path=":service" element={<Service />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
