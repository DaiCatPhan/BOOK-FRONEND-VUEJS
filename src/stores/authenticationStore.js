import { defineStore } from "pinia";

export const authenticationStore = defineStore("authenticaiton", {
  state: () => ({
    user: {
      _id: "",
      HoTen: "",
      Email: "",
      SoDienThoai: "",
      Role: "",
    },
    isLogin: false,
  }),

  actions: {
    getUser() {
      return this.user;
    },
    getStateLogin() {
      return this.isLogin;
    },
    setIsLogin(state) {
      this.isLogin = state;
    },

    logout() {
      this.user = {
        _id: "",
        HoTen: "",
        Email: "",
        SoDienThoai: "",
        Role: "",
      };
      this.isLogin = false;
    },

    setUserAndLogin(tokenData) {
      // Parse the tokenData to extract user information
      const { Id, HoTen, SoDienThoai, Email, Role } = tokenData;

      // Set the user information in the store
      this.user._id = Id;
      this.user.HoTen = HoTen;
      this.user.SoDienThoai = SoDienThoai;
      this.user.Email = Email;
      this.user.Role = Role;

      // Set isLogin to true to indicate that the user is logged in
      this.isLogin = true;
    },
  },
});
