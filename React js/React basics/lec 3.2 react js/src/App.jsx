import { useState } from "react";
import Data from "./PlanData";
import Plans from "./components/Plans";

function App() {
  const [plans, setPlans] = useState(Data);

  function removePlanCard(id) {
    const newPlans = plans.filter((plan) => plan.id !== id);
    setPlans(newPlans);
  }

  if (plans.length === 0) {
    return (
      <div className="noPlansLeft">
        <h2>No Tour Plans Left</h2>
        <button onClick={() => setPlans(Data)} className="refreshBtn">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Plans plans={plans} removePlanCard={removePlanCard} />
    </div>
  );
}

export default App;
