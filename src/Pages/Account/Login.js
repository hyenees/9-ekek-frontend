import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import kakao from "../../Images/kakao_login_large_wide.png";
import {jsKey} from "../../jsKey"
import {API_URL} from "../../config";

const { Kakao } = window;
Kakao.init(jsKey)

function Login({history}) {
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    email: null,
    password: null,
  });

  const [borderColor, setBorderColor] = useState({
    email: null,
    password: null,
  });
  
  const [fontSize, setFontSize] = useState({
    email: "big",
    password: "big",
  });

 

  const inputFocus = (e) => {
    setFocus({
      ...focus,
      [e.target.name]: !focus[e.target.name],
    });
    setFontSize({
      ...fontSize,
      [e.target.name]: "small",
    });
    valid[e.target.name] === null || valid[e.target.name]
      ? setBorderColor({
          ...borderColor,
          [e.target.name]: "bottomBlue",
        })
      : setBorderColor({
          ...borderColor,
          [e.target.name]: "bottomRed",
        });
  };

  const inputBlur = (e) => {
    setFocus({
      ...focus,
      [e.target.name]: focus[e.target.name],
    });

    valid[e.target.name]
      ? setBorderColor({
          ...borderColor,
          [e.target.name]: null,
        })
      : setBorderColor({
          ...borderColor,
          [e.target.name]: "bottomRed",
        });

    value[e.target.name].length > 0
      ? setFontSize({
          ...fontSize,
          [e.target.name]: "small",
        })
      : setFontSize({
          ...fontSize,
          [e.target.name]: "big",
        });
  };

  const onChangeEmail = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });

    e.target.value.includes("@") && e.target.value.includes(".")
      ? setValid({
          ...valid,
          [e.target.name]: true,
        })
      : setValid({
          ...valid,
          [e.target.name]: false,
        });
  };

  const onChangePassword = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    const reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$/;
    reg.test(e.target.value)
      ? setValid({
          ...valid,
          [e.target.name]: true,
        })
      : setValid({
          ...valid,
          [e.target.name]: false,
        });
  };

  const loginClick = () => {
    axios({
      method: "POST",
      url: `${API_URL}/user/login`,
      data: {
        email: value.email,
        password: value.password,
      },
    })
    .then(res => localStorage.setItem("access_token", res.token))
    history.push('./');
  }

  const kakaoClick = () => {
      // Open login popup.   
      Kakao.Auth.loginForm({
        success(authObj) {
          fetch(`${URL}/user/kakaologin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: authObj.access_token,
            },
          })
            .then(res => res.json())
            .then(res => { console.log(res)
            })
            .catch(error => {
              console.log(error);
            });
        },
        fail(err) {
          console.log(JSON.stringify(err));
        },
      });
  }

  return (
    <Wrapper>
      <Container left>
        <Icon>
          <FiArrowLeft size="23" />
        </Icon>
        <Box>
          <img
            src="https://kr.accounts.ikea.com/resources/kr//logo.svg"
            alt=""
          />
          <div className="text">
            <h1>
              지금 IKEA에
              <br />
              로그인하세요!
            </h1>
            <p>
              휴대폰 번호를 인증하시면 해당 번호로 간편 로그인이 가능해집니다.
            </p>
          </div>
          <div className="footer-text">
            <span>IKEA.kr</span>&nbsp;-&nbsp;<a>개인정보처리방침</a>
            <div>© Inter IKEA Systems B.V. 1999-2020</div>
          </div>
        </Box>
      </Container>
      <Container>
        <div className="login-box">
          <LoginBox>
            <InputBox>
              <Input
                name = "email"
                value = {value.email}
                onFocus={inputFocus}
                onBlur={inputBlur}
                onChange={onChangeEmail}
                fontSize={fontSize.email}
                borderColor={borderColor.email}
              />
              <Label fontSize={fontSize.email}>이메일 또는 휴대폰 번호</Label>
            </InputBox>
            <InputBox password>
              <Input
                type = "password"
                name = "password"
                value = {value.password}
                onFocus={inputFocus}
                onBlur={inputBlur}
                onChange={onChangePassword}
                fontSize={fontSize}
                borderColor={borderColor.password}
              />
              <Label fontSize={fontSize.password}>비밀번호</Label>
            </InputBox>
            <a>비밀번호 찾기</a>
            <Button onClick = {loginClick}>로그인</Button>
          </LoginBox>
          <Button gray onClick={()=>history.push("./signup")}>회원가입</Button>
          <img src={kakao} alt="" onClick={kakaoClick}/>
        </div>
      </Container>
    </Wrapper>
  );
}

export default withRouter(Login);

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  flex: ${(props) => (props.left ? "4.5" : "8")};
  position: ${(props) => (props.left ? "" : "relative")};
  height: 100vh;
  padding: 32px 80px;
  background: ${(props) => (props.left ? "#0058A3" : "#ffffff")};
  color: #ffffff;

  .login-box {
    position: absolute;
    top: 50%;
    transform: translateY(-55%);

    img{
      display : block;
      width:auto;
      height : 56px;
      margin : 16px auto 0;
      cursor : pointer;

      &:hover{
            filter: brightness(93%); 
        }
    }
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-end;
  margin-left: auto;
  width: 256px;
  height: 100%;

  img {
    width: 88px;
    height: 44px;
  }

  .text {
    width: 100%;
    height: 208px;
    margin-top: 16px;
    text-align: left;

    h1 {
      font-family: "NotoSansBold";
      font-size: 32px;
      font-weight: 700;
      line-height: 42.67px;
      letter-spacing: -0.64px;
    }

    p {
      font-size: 14px;
      line-height: 24px;
    }
  }

  .footer-text {
    font-size: 11px;
    line-height: 18.85px;
    color: #f2f5f7;

    a {
      text-decoration: underline solid rgb(242, 245, 247);
      font-size: 11px;
      cursor: pointer;
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  left: 32px;
  top: 41.375px;
`;

const LoginBox = styled.div`
  width: 448px;
  height: 262px;
  padding: 16px 0;
  display: flex;
  flex-direction: column;

  a {
    color: #666666;
    font-size: 12px;
    line-height: 1.71429;
    cursor: pointer;

    &:hover {
      text-decoration: underline solid rgb(102, 102, 102);
    }
  }
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 50px;
  margin-bottom: ${(props) => (props.password ? "10px" : "20px")};
`;

const Input = styled.input`
  height: 50px;
  padding: 24px 0 1px 0;
  border: none;
  font-size: 16px;
  border-bottom: ${(props) =>
    props.borderColor === null ? "1px solid #929292" : ""};
  border-bottom: ${(props) =>
    props.borderColor === "bottomBlue" ? "1px #0058a3" : ""};
  border-bottom: ${(props) =>
    props.borderColor === "bottomRed" ? "1px #e00751" : ""};
  box-shadow: ${(props) =>
    props.borderColor === "bottomBlue" ? "0 1px 0 #0058a3" : ""};
  box-shadow: ${(props) =>
    props.borderColor === "bottomRed" ? "0 1px 0 #e00751" : ""};
`;

const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.fontSize === "small" ? 0 : "22px")};
  color: #484848;
  font-size: ${(props) => (props.fontSize === "small" ? "12px" : "16px")};
  line-height: 24px;
  transition: 0.2s;
`;

const Button = styled.button`
  justify-self: flex-end;
  margin-top: auto;
  width: 448px;
  height: 56px;
  padding: 0 40px;
  border: none;
  border-radius: 40px;
  color: ${(props) => (props.gray ? "#111111" : "#ffffff")};
  background: ${(props) => (props.gray ? "#F5F5F5" : "#0058A3")};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.gray ? "#E0E0E0" : "#004f93")};
  }
`;