import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BugList from "./components/BugList";
import BugForm from "./components/BugForm";

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-center">Bug Tracker</h1>
        <Routes>
          <Route path="/" element={<BugList />} />
          <Route path="/new" element={<BugForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
