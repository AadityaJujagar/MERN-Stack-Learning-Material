import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/knowmore");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="p-4 border text-center rounded-md mb-2">About</div>
      <button onClick={clickHandler} className="p-2 border">
        Click here for Know More
      </button>
      <button onClick={goBack} className="p-2 border">
        Go back
      </button>
    </div>
  );
}

export default About;
