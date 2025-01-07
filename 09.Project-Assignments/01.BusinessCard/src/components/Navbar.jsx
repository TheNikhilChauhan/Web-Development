import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/createCard");
          }}
        >
          Create Card
        </li>
        <li
          onClick={() => {
            navigate("/viewCard");
          }}
        >
          View Card
        </li>
      </ul>
    </div>
  );
}
