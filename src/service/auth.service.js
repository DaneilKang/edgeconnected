import axios from "axios";

const API_URL = process.env.REACT_APP_LOGIN_API_URL;

const signUp = (email, password) => {
    return axios({
            method: 'post',
            url: API_URL + "/signup",
            headers: {}, 
            data: { email, password }
        }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            } else {
                alert("Token access error!! or Incorrect user information!");
            }
            return response.data;
        });
};

const login = (email, password) => {
    return axios({
                method: 'post',
                url: API_URL + "/login",
                headers: {}, 
                data: { email, password }
            }).then(response => {
                if (response.data.body) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                } else {
                    alert("Token access error!! or Incorrect user information!");
                }
                return response.data;
            });
};

const logout = () => {
    return localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}


const AuthService = {
    signUp,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;