import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductForm from "./components/ProductForm";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-2">
        <h6>bootstrap demo</h6>
        <div className="progress" style={{ height: 30 }}>
          <div
            className="progess-bar bg-info progress-bar-striped progress-bar-animated"
            style={{ width: "30%", height: 30, lineHeight: "30px" }}
          >{`30%`}</div>
        </div>
        <br />
        <ProductForm />
      </div>
    </div>
  );
}
