import { useNavigate } from "react-router-dom";
const useLogOut = () => {
  const navigate = useNavigate();
  function logout() {
    const sessionData = JSON.parse(sessionStorage.getItem("formData")) || {};

    if (sessionData.isLoggedIn === true) {
      const updateSession = { ...sessionData, isLoggedIn: false };
      sessionStorage.setItem("formData", JSON.stringify(updateSession));
      navigate("/login");
    }
  }
  return logout;
};

export default useLogOut;
