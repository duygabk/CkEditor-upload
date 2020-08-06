import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ProductForm from "./components/admin/ProductForm";
import AppHeader from "./components/common/AppHeader";
// import ProductCard from "./components/product/ProductCard";

// import Progress from "./components/Progress";
// import UploadMulty from "./components/UploadMulty";

export default function App() {
  return (
    <div className="App">
      <div className="container mt-2">
        <AppHeader />
        <div className="row">
          <div className="card-columns">
            {/* <ProductCard productInfo={{}} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
