import React from "react";
import { useLocation } from "react-router-dom";

export default function ContactPage(props) {
  let location = useLocation();

  console.log(location);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Contact</h1>
      </div>
    </div>
  );
}