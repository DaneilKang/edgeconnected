import axios from "axios";
import setAuthorizationToken from "./setAuthorizationToken";

const API_URL = process.env.REACT_APP_LOGIN_API_URL;

const signUp = (email, password) => {
    return axios({
            method: 'post',
            url: API_URL + "/signup",
            headers: {}, 
            data: { email, password }
        }).then(response => {
            if (response.data.accessToken) {
                localStorage.setItem("jwtToken", JSON.stringify(response.data));
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
                const token = response.data.body;
                localStorage.setItem("jwtToken", token);
                setAuthorizationToken(token);
                return response.data;
            });
};

const logout = () => {
    return localStorage.clear();
}

const getCurrentUser = () => {
    return localStorage.getItem('jwtToken');
}

const getCurrentUserRole = () => {
    return localStorage.getItem('role');
}

const AuthService = {
    signUp,
    login,
    logout,
    getCurrentUser,
    getCurrentUserRole,
};

export default AuthService;