import React from "react";
import "./style.css";
import MyComponent from './MyComponent'
export default function App() {
  return (
    <div className="row">
      <div id="redIdDiv" className="content">
      content 1
      </div>
      <div id="blueIdDiv" className="content">
          content 2
        </div>
        <div  id="greenIdDiv" className="content">
          content 3
        </div>
    </div>
  );
}
