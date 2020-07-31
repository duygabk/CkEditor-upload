import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductForm from "./components/ProductForm";
// import Progress from "./components/Progress";
// import UploadMulty from "./components/UploadMulty";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-2">
        <h6>bootstrap demo</h6>
        {/* <Progress /> */}
        <br />
        <ProductForm />
        {/* <UploadMulty /> */}
      </div>
    </div>
  );
}
