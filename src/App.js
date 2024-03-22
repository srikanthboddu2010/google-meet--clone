import React from "react";
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import CallPage from "./components1/CallPage/CallPage";
import HomePage from "./components1/HomePage/HomePage";
import NoMatch from "./components1/NoMatch/NoMatch";
// import Home from "./components/Home";
// import Room from "./components/Room";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<CallPage />}/>
        <Route  path="/"element={<HomePage />} />
        <Route  path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
