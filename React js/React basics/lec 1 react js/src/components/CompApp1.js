import "./CompApp1.css";

function AppC1(props) {
  return (
    <div>
      <p className="CompAppDiv">AppComp1 to be exported to App.jsx</p>;
      {props.childern};
    </div>
  );
}

export default AppC1;
