export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.body) {
        // return { Authorization: 'Bearer ' + user.accessToken }
        return { 'x-toke': user.body };
    }
    
    return {};
}