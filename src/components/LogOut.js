import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/AuthUtils";
const useLogOut = () => {
  const navigate = useNavigate();
  function LogOut() {
    // session Login
    // const sessionData = JSON.parse(sessionStorage.getItem("formData")) || {};
    // if (sessionData.isLoggedIn === true) {
    //   const updateSession = { ...sessionData, isLoggedIn: false };
    //   sessionStorage.setItem("formData", JSON.stringify(updateSession));
    //   navigate("/login");
    // }

    if (isAuthenticated()) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }
  return LogOut;
};

export default useLogOut;
