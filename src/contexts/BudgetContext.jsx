import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function ToggleBudget({}) {
  if (Budget) SetBudget(false);
  else SetBudget(true);
}
function BudgetProvider({ children }) {
  const [Budget, SetBudget] = useState(false);
  return (
    <BudgetContext.Provider
      value={{
        Budget,
        SetBudget,
      }}
    >
        {children}
    </BudgetContext.Provider>
  );
}

function setBudgetMode() {
    const budget = useContext(BudgetContext);
    return budget;
}

export { BudgetProvider, setBudgetMode }