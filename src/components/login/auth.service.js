import axios from "axios";
// const API_URL = "http://localhost:8080/api/";
const API_URL = process.env.REACT_APP_LOGIN_API_URL;

export function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.body) {
      // for Node.js Express back-end
      return { 'x-access-token': user.body };
    } else {
      return {};
    }
  }

class AuthService {

  async login(email, password) {
    const response = await axios({
        method: 'post',
        url: API_URL,
        headers: {}, 
        data: { 
            email,
            password
        }
      });
    
      if (response.data.body) {
        localStorage.setItem("user", JSON.stringify(response.data));
        // localStorage.setItem("jwt_token", response.headers)
        authHeader();
      } else {
        alert("Token access error!! or Incorrect user information!");
      }
      return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  //   register(username, email, password) {
//     return axios.post(API_URL + "signup", {
//         username,
//       email,
//       password
//     });
//   }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
export default new AuthService();