import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [prd, setPrd] = useState({ name: "", price: 0 });
  const Navigate = useNavigate();

  let HandleChange = useCallback((e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setPrd((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(prd.price);
  });
  let HandlePostReq = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2000/products", prd)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    Navigate("/products");
  };
  return (
    <div>
      <h1>AddProduct</h1>
      <form action="" onSubmit={HandlePostReq}>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Product_Name"
            name="name"
            value={prd.name}
            onChange={HandleChange}
          />
          <label for="floatingInput">Product Name</label>
        </div>
        <div class="form-floating">
          <input
            type="number"
            class="form-control"
            id="floatingPassword"
            placeholder="Product_Price"
            name="price"
            value={prd.price}
            onChange={HandleChange}
          />
          <label for="floatingPassword">Product Price</label>
        </div>
        <button className="btn btn-dark w-100 mt-3">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
