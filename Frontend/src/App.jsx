import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnalyzeJob from "./pages/AnalyzeJob";
import History from "./pages/History";
import About from "./pages/About";


function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analyze" element={<AnalyzeJob />} />
      <Route path="/history" element={<History/>} />
      <Route path="/about" element={<About/>} />
      </Routes>
  );
}

export default App;