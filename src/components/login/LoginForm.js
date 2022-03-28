import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
import AuthService from "../../service/auth.service";

const Container = styled.div`
  margin-top: 30px;
  padding: 20px;
  display: inline-flex;
  border-radius: 9px;
  flex-direction: column;
  align-items: center;
  width: 30%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 80%;
  height: 40px;
  margin: 0 0 8px;
  padding: 7px 39px 7px 20px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 80%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #5ebde4;
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  };

  return (
    
      <Container>
        <div>
          <img src="https://www.edgeconnected.com/manage/assets/images/logos/edgelogo.png" style={{width:"120px", height:"120px"}} alt="logo"/>
        </div>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          onChange={onChangeEmail}
        />
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChangePassword}
        />
        <Button onClick={handleLogin}>LOGIN</Button>
      </Container>
  );
}

export default LoginForm;