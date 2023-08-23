import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/about");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="p-4 border text-center rounded-md mb-2">Home</div>
      <button onClick={clickHandler} className="p-2 border">
        Click here for About
      </button>
      <button onClick={goBack} className="p-2 border">
        Go back
      </button>
    </div>
  );
}

export default Home;
