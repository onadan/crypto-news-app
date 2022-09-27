import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";

function App() {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
