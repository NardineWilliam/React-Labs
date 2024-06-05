// import React, { useState } from "react";
// import Slider from "./slider";
// import styles from "../Styles/home.module.css";

// const Home = () => {
//   const [currentComponent, setCurrentComponent] = useState(null);

//   const renderComponent = () => {
//     switch (currentComponent) {
//       case "Slider":
//         return <Slider />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className="text-center  mb-4">Home Page</h1>
//       <div className="d-flex justify-content-center mb-3">
//         <button
//           className="btn btn-primary mx-2"
//           onClick={() => setCurrentComponent("Slider")}>
//           Slider
//         </button>
//       </div>
//       <div className={styles.componentContainer}>{renderComponent()}</div>
//     </div>
//   );
// };

// export default Home;

// src/components/Home.jsx
import React, { useState } from "react";
import Slider from "./slider";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import styles from "../Styles/home.module.css";

const Home = () => {
  const [currentComponent, setCurrentComponent] = useState(null);

  const renderComponent = () => {
    switch (currentComponent) {
      case "Slider":
        return <Slider />;
      case "ClassComponent":
        return <ClassComponent />;
      case "FunctionComponent":
        return <FunctionComponent />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <h1 className="text-center mb-4">Home Page</h1>
      <div className="d-flex justify-content-center mb-3">
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentComponent("Slider")}>
          Slider
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentComponent("ClassComponent")}>
          Class Component
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => setCurrentComponent("FunctionComponent")}>
          Function Component
        </button>
      </div>
      <div className={styles.componentContainer}>{renderComponent()}</div>
    </div>
  );
};

export default Home;
