import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();


function BudgetProvider({ children }) {
  const [budget, setBudget] = useState(false);
  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
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