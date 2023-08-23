import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import KnowMore from "./components/KnowMore";
import Support from "./components/SupportUs";
import NotFound from "./components/NotFound";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="flex flex-col items-center">
      <nav className="flex flex-col items-center">
        <ul>
          <li className="cursor-pointer">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/knowmore">Know More</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="support">Support</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* parent header */}
        <Route path="/" element={<MainHeader />}>
          {/* Home is default route */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/knowmore" element={<KnowMore />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
