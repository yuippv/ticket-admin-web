// import logo from './logo.svg';
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ticket from "./components/ticket/ticket";
import Home from "./components/home/home";

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
      </BrowserRouter>
    </div>
  );
}

export default App;
