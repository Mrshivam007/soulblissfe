import React from "react";
import Step1 from "./step1";
import Step2 from "./step2";

const ClassDetails = () => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePrev = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step - 1);
  };

  const handleSubmit = (data) => {
    setFormData({ ...formData, ...data });
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onPrev={handlePrev} onSubmit={handleSubmit} />}
    </div>
  );
};

export default ClassDetails;
