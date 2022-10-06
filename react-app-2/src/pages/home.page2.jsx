import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function HomePage(props) {
    let location = useLocation();
    let navigate = useNavigate();

    console.log(location);

    function authenticate() {
        navigate("/about", { state: "is from home" });
    }
    return (
        <div className="App">
            <div className="App-header"></div>
            <h1>Home</h1>
            <button onClick={authenticate}>Go slowly to about </button>
        </div>
        </div>
    );
}