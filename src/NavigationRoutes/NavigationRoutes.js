import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from "../page/Home";
import Favororites from "../page/Favorites";



export default function NavigationRoutes() {
    return (
      <Router>
        <div>
          <div>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/favorites" element={<Favororites/>} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }