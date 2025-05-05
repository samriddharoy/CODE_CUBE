import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";

import Editor from "./Pages/Editor"; // Ensure path & casing is correct
import ListCard from "./components/ListCard";
import Home from "./Pages/Home"; // Ensure path & casing is correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* ✅ Update: Dynamic route with projectName parameter */}
        <Route path="/editor/:projectName" element={<Editor />} />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
