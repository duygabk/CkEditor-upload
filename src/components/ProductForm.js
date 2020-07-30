import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const UPLOAD_URL = "http://localhost:8888/api/product/add-product";
const UPLOAD_CKEDITOR_URL = "http://localhost:8888/api/product/testupload";
function ProductForm(props) {
  const [productInfo, setProductInfo] = useState({
    productName: "",
    productCategory: 1,
    productCode: "",
    productPrice: "",
    productDescription: "",
    productSpecification: ""
  });

  const [productImage, setProductImage] = useState([]);

  const [previewImage, setPreviewImage] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = document.getElementsByClassName("needs-validation")[0];
    form.classList.add("was-validated");
    // console.log("submit ", form[0]);
  };

  const showImageInfo = index => {
    console.log(index);
    let productImageBuff = [...productImage];
    let previewImageBuff = [...previewImage];

    console.log(previewImageBuff);

    productImageBuff.splice(index, 1);
    previewImageBuff.splice(index, 1);

    console.log(previewImageBuff);

    // setProductImage(productImageBuff);
    // setPreviewImage(previewImageBuff);
  };

  const handleOnChangeImage = event => {
    // console.log(event.target.files.length);
    // event.target.files.length && setFileImage(event.target.files);
    // const totalImage = event.target.files.length;
    // test image
    const { files } = event.target;
    // let productImageBuff = [...productImage];
    let productImageBuff = [...productImage, ...files];
    setProductImage(productImageBuff);
    console.log(productImageBuff);
    // [...files].map(file => console.log(URL.createObjectURL(file)));
    // [...files].map(file => console.warn(file.name));
    // end test image
    let previewImageBuff = [...previewImage];
    [...files].length &&
      [...files].map((file, key) => {
        const url = URL.createObjectURL(file);
        const index = previewImage.length + key;
        const imgTag = (
          <div className="m-2 text-align-center" key={index}>
            <img
              src={url}
              style={{ width: 150, margin: 2, display: "block" }}
              alt="preview Product"
            />
            <button onClick={() => showImageInfo(index)}>remove</button>
          </div>
        );
        previewImageBuff.push(imgTag);
      });
    setPreviewImage(previewImageBuff);
    // let urlLocalArr = [];
    // for (let i = 0; i < totalImage; i++) {
    //   const img = event.target.files[i];
    //   const imgUrl = URL.createObjectURL(img);
    //   urlLocalArr.push(imgUrl);
    // }
    // const previewTags = urlLocalArr.map((url, key) => (
    //   <img src={url} key={key} style={{ width: 150 }} alt="preview Product" />
    // ));
    // setPreviewImage(previewTags);
  };

  const handleOnchange = event => {
    const { name, value } = event.target;
    let productInfoBuff = { ...productInfo };
    // console.log(name, value);
    productInfoBuff[name] = value;
    setProductInfo(productInfoBuff);
  };

  const handleCKEditorChange = (event, editor) => {
    const data = editor.getData();
    let productInfoBuff = { ...productInfo };
    productInfoBuff.productSpecification = data;
    setProductInfo(productInfoBuff);
  };

  // console.log(productInfo);

  return (
    <div className="border rounded border-success p-3">
      <form
        // action={UPLOAD_URL}
        method="post"
        className="needs-validation"
        encType="multipart/form-data"
        noValidate
        onSubmit={handleSubmit}
      >
        {/* product name */}
        <div className="form-group">
          <label htmlFor="productname">Product Name:</label>
          <input
            className="form-control"
            id="productname"
            type="text"
            name="productName"
            value={productInfo.productName}
            onChange={handleOnchange}
            required
          />
          {/* <div className="valid-feedback">Valided</div> */}
          <div className="invalid-feedback">InValid</div>
        </div>
        {/* product category */}
        <div className="form-group">
          <label htmlFor="">Product Category:</label>
          <select
            className="form-control custom-select"
            name="productCategory"
            // defaultValue={1}
            value={productInfo.productCategory}
            onChange={handleOnchange}
          >
            <option value={1}>Common</option>
            <option value={2}>Category 1</option>
            <option value={3}>Category 2</option>
            <option value={4}>Category 3</option>
          </select>
        </div>
        {/* product code and price */}
        <div className="form-group">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="">Product Code:</label>
              <input
                type="text"
                className="form-control"
                name="productCode"
                onChange={handleOnchange}
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="">Product Price:</label>
              <input
                type="text"
                className="form-control"
                name="productPrice"
                onChange={handleOnchange}
              />
            </div>
          </div>
        </div>
        {/* product description */}
        <div className="form-group">
          <label htmlFor="">Product Description:</label>
          <textarea
            className="form-control"
            name="productDescription"
            rows="3"
            onChange={handleOnchange}
          />
        </div>
        {/* product images */}
        <div className="form-group">
          <label htmlFor="">Image:</label>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              name="productImage"
              id="customFile"
              onChange={handleOnChangeImage}
              multiple
            />
            <label className="custom-file-label" htmlFor="customFile">
              Choose file
            </label>
          </div>
          {previewImage.length ? (
            <div className="bg-dark text-white p-2 preview">{previewImage}</div>
          ) : null}
        </div>
        {/* product specification */}
        <div className="form-group">
          <label htmlFor="">Product Specification:</label>
          <CKEditor
            data={productInfo.productSpecification}
            editor={ClassicEditor}
            config={{
              ckfinder: {
                uploadUrl: UPLOAD_CKEDITOR_URL
              }
            }}
            onChange={handleCKEditorChange}
          />
        </div>
        {/* summit - reset */}
        <hr />
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Submit
          </button>{" "}
          {`   `}
          <button type="reset" className="btn btn-danger">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
