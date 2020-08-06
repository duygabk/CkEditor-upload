import React, { useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import ProductForm from "./components/admin/ProductForm";
import AppHeader from "./components/common/AppHeader";
import ProductCard from "./components/product/ProductCard";
import { getAppMenu } from "./utils/axios";

// import Progress from "./components/Progress";
// import UploadMulty from "./components/UploadMulty";

export default function App() {
  // first time, load user, menu, display item...
  useEffect(() => {
    getAppMenu()
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <div className="container mt-1">
        {/* <div className="row"> */}
        <AppHeader />
        {/* </div> */}
        <div className="row mt-2">
          <div className="card-columns">
            <ProductCard productInfo={{}} />
            <ProductCard productInfo={{}} />
            <ProductCard productInfo={{}} />
            <ProductCard productInfo={{}} />
            <ProductCard productInfo={{}} />
          </div>
        </div>
      </div>
    </div>
  );
}
