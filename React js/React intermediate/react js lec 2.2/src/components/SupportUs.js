import { useNavigate } from "react-router-dom";

function Support() {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="p-4 border text-center rounded-md mb-2">Support</div>
      <button onClick={clickHandler} className="p-2 border">
        Click here for Home
      </button>
      <button onClick={goBack} className="p-2 border">
        Go back
      </button>
    </div>
  );
}

export default Support;
