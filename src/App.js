// import logo from './logo.svg';
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ticket from "./components/ticket/ticket";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Create from "./components/create/create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Ticket" element={<Ticket />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Login" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/Create" element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
