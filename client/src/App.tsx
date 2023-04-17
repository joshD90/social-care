import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import ServicesContainer from "./views/ServicesContainer";
import Service from "./views/Service";
import SingleService from "./views/SingleService";
import CategoriesList from "./views/CategoriesList";

function App() {
  return (
    <Router>
      <div className="bg-slate-800 w-screen min-h-screen">
        <Routes>
          <Route path="/">
            <Route path="services">
              <Route path="categories" element={<CategoriesList />} />
              <Route
                path="categories/:category"
                element={<ServicesContainer />}
              />
              <Route path=":service" element={<SingleService />} />
            </Route>
          </Route>
        </Routes>
        {/* <ServicesContainer /> */}
      </div>
    </Router>
  );
}

export default App;
