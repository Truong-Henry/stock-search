import { useEffect } from "react";

const ActiveLogic = (refForm, refInput) => {
  useEffect(() => {
    const formCurrent = refForm.current;
    const inputCurrent = refInput.current;

    // CSS will not stay if focused and mouse leave. This is why there is form-active and input-active
    const addActiveForm = () => {
      formCurrent.classList.add("form-active");
    };
    const removeActiveForm = () => {
      formCurrent.classList.remove("form-active");
    };

    const addActiveInput = () => {
      formCurrent.classList.add("input-active");
    };
    const removeActiveInput = () => {
      formCurrent.classList.remove("input-active");
    };

    formCurrent.addEventListener("mouseenter", addActiveForm);
    formCurrent.addEventListener("mouseleave", removeActiveForm);
    inputCurrent.addEventListener("focus", addActiveInput);
    inputCurrent.addEventListener("blur", removeActiveInput);
    inputCurrent.focus(); // Wait for event listener so class will be applied on focus

    return () => {
      formCurrent.removeEventListener("mouseenter", addActiveForm);
      formCurrent.removeEventListener("mouseleave", removeActiveForm);
      inputCurrent.removeEventListener("focus", addActiveInput);
      inputCurrent.removeEventListener("blur", removeActiveInput);
    };
  });
};

export default ActiveLogic;
