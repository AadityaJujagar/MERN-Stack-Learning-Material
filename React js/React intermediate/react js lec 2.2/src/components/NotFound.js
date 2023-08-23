import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="p-4 border text-center rounded-md mb-2">
        Page Not Found
      </div>
      <button onClick={goHome} className="p-2 border">
        Go back to Home
      </button>
    </div>
  );
}

export default NotFound;
