const selectPlan = (planNumber) => {
  document.querySelector("#plan1").classList.remove("plan--selected");
  document.querySelector("#plan2").classList.remove("plan--selected");
  document.querySelector("#plan3").classList.remove("plan--selected");

  const selectedPlanElem = document.querySelector(`#plan${planNumber}`);
  selectedPlanElem.classList.add("plan--selected");
};

selectPlan(3); 