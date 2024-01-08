import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const message = [
    "Step 1: Learn React",
    "Step 2: Apply for Jobs",
    "Step 3: Earn Money",
  ];
  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };
  return (
    <>
      <div className="step">
        <div className="numbers">
          <div className={step >= 1 && "active"}>1</div>
          <div className={step >= 2 && "active"}>2</div>
          <div className={step >= 3 && "active"}>3</div>
        </div>
        <p className="message">{message[step - 1]}</p>
        <div className="buttons">
          <button className="previous" onClick={handlePrevious}>
            Previous
          </button>
          <button className="next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
