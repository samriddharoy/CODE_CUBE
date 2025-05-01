import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ProjectMenu from "./pages/ProjectMenu";
import Editor from "./Pages/Editor"; // Ensure path & casing is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/projects" element={<ProjectMenu />} />
        <Route path="/Editor" element={<Editor />} /> {/* Fixed: removed :projectid */}
      </Routes>
    </Router>
  );
}

export default App;
