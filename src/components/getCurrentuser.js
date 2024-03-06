import { login, logout } from "../redux/authSlice";
import { httpAuth } from "../index";

const getCurrentUser = async (dispatch) => {
  try {
    const response = await httpAuth.get("/api/v1/users/current-user");
    const userData = response.data.data;
    if (userData) {
      dispatch(login(userData));
    } else {
      dispatch(logout());
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default getCurrentUser;
