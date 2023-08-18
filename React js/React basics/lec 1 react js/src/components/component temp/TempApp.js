import "./TempApp.css";

function TempApp(props) {
  // assume that values are changing dynamically
  // no hardcoding, its supposed to be api fetched data
  const date = props.date;
  const month = props.month;
  const year = props.year;
  return (
    <div>
      <p className="tempApp">{date}</p>;<p className="tempApp">{month}</p>;
      <p className="tempApp">{year}</p>
      {props.children};
    </div>
  );
}

export default TempApp;
