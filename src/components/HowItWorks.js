import { useState, useEffect } from "react";
import api from "../api/api";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function HowItWorks() {
  let [steps, getSteps] = useState([]);
  let [isError, setError] = useState(null);
  let [isLoading, setLoading] = useState(null);

  const fetchData = (e) => {
    setLoading(true);
    api
      .getData()
      .then((response) => {
        getSteps(response.data);
        setError(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loader
      className="spinner"
      type="Oval"
      color="#7fffd4"
      height={80}
      width={80}
    />
  ) : isError ? (
    <div className="steps-container">
      <h2 className="section-title lato-light">Oops...</h2>
      <div className="error-container">
        <div className="error-message">
          Looks like we weren't able to load the steps for you. Check your
          internet connection and try again.
        </div>
        <button className="error-button" onClick={fetchData}>
          Try Again
        </button>
      </div>
    </div>
  ) : (
    <div className="steps-container">
      <h2 className="section-title lato-light">How It Works</h2>
      <div className="steps-inner-container">
        {steps.map((step, index) => (
          <div className="step-information" key={index}>
            <h2 className="step-number">0{step.stepNumber}</h2>
            <div className="divider"></div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HowItWorks;
