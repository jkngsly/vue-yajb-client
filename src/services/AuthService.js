import axios from "axios";

export default class AuthService {
  constructor() {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  async login(email, password) {
    const request = axios
      .post("/login", {
        email: email,
        password: password,
      })
      .catch(function (error) {
        console.log(error);
      });

    return request.then((response) => response.data);
  }

  async register(user) {
    const request = axios.post("/register", user).catch(function (error) {
      console.log(error);
    });

    return request.then((response) => response.data);
  }
}
