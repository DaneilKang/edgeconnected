import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import authService from "./auth.service";

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
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [userName, setUserName] = useState("");

  const onChangeUserName = (e) => {
    setUserName(e.target.value)
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  };

  const onSubmitAccount = async () => {
    try {
      await authService.login(userName, password);
      navigate("/");
    } catch (error) {
      console.error("error:", error)
      window.alert(error);
    }
  };
  return (
    <Container>
      <Input
        id="email"
        name="email"
        placeholder="Email"
        onChange={onChangeUserName}
      />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChangePassword}
      />
      <Button onClick={onSubmitAccount}>LOGIN</Button>
    </Container>
  );
}

export default LoginForm;