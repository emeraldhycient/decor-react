import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function WithAuth({ children }) {
  const navaigation = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navaigation("/login");
    }
  }, []);
  return <>{children}</>;
}

export default WithAuth;
