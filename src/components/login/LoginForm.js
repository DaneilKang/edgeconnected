import React, { useState } from "react";
import styled from "styled-components";
import { FetchLogin } from "./FetchLogin";
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
`;

function LoginForm() {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitAccount = async () => {
    try {
      const user = await FetchLogin(account);

      setUser(user);
      navigate("/");
    } catch (error) {

      window.alert(error);
    }
  };
  return (
    <Container>
      <Input
        id="email"
        name="email"
        placeholder="Email"
        onChange={onChangeAccount}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChangeAccount}
      />
      <Button onClick={onSubmitAccount}>LOGIN</Button>
    </Container>
  );
}

export default LoginForm;