import { authenticationStore } from "../../stores/authenticationStore";

const getProfilePinia = () => {
  const authenticaiton = authenticationStore();
  const profile = authenticaiton?.getUser();
  const isLogin = authenticaiton?.getStateLogin();
  console.log("asjkdhfkjsdfs", profile, isLogin);
  return { profile, isLogin };
};

export default getProfilePinia;
