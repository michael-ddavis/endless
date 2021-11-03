import { useState, useEffect } from "react";
import api from "../api/api";

function HowItWorks() {
  let [steps, getSteps] = useState([]);

  const fetchData = (e) => {
    api
      .getData()
      .then((response) => {
        getSteps(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {steps.map((step, index) => (
        <div key={index}>
          <h2>{step.stepNumber}</h2>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HowItWorks;
