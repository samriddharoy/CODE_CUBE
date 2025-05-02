import { BrowserRouter, Routes, Route } from "react-router-dom"

import Signup from "./pages/Signup"
import Signin from "./pages/Signin"

import Editor from "./Pages/Editor"; // Ensure path & casing is correct
import ListCard from "./components/ListCard";
import Home from "./Pages/Home"; // Ensure path & casing is correct


function App() {
  return(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />}></Route> */}
      <Route path="/Home" element={<Home />}></Route> 
      
      <Route path="/Editor" element={<Editor />} /> {/* Fixed: removed :projectid */}
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;
