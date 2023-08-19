import Card from "./Card";

function Plans({ plans, removePlanCard }) {
  return (
    <div className="plansParent">
      <div className="title">
        <h2>Plan With Aadi</h2>
      </div>
      <div className="cards">
        {plans.map((plan) => {
          return (
            <Card key={plan.id} {...plan} removePlanCard={removePlanCard} />
          );
        })}
      </div>
    </div>
  );
}

export default Plans;
