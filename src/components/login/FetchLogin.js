export const FetchLogin = async ({ email, password }) => {
  const response = await fetch("http://localhost:8080/api");

  if (response.ok) {
    const users = await response.json();
console.log("email:", email)
    const user = users.find((user) => user.email === email);
    if (!user || user.password !== password) {
      throw new Error("Email or Password is incorrect!");
    }

    return user;
  }

  throw new Error("Server error");
};