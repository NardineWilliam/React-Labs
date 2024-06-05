// src/components/FunctionComponent.jsx
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import styles from "../Styles/functionComponent.module.css";

const FunctionComponent = () => {
  const { data, loading } = useFetch("https://dummyjson.com/products");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.functionComponentContainer}>
      <h2>Function Component</h2>
      <input
        type="text"
        placeholder="Search by name"
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.cardsContainer}>
          {filteredData.map((product) => (
            <div key={product.id} className={styles.card}>
              <h5>{product.title}</h5>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FunctionComponent;
