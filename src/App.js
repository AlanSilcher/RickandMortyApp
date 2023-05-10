import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";
import Detail from "./Pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
