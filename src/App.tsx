import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserScreen from "./pages/UserScreen";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<UserScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
