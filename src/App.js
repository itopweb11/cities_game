import './App.scss';
import React from "react";
import Home from "./components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";

function App() {

    return (
    <div className="app">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/delivery" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
