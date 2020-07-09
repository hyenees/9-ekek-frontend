import React, { useState } from 'react';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';


function Login () {
    const [click, setClick] = useState({
        email : false,
        password : false
    })
    const [value, setValue] = useState({
        email : '',
        password : ''
    })
    const [valid, setValid] = useState(false);

    const inputFocus = (e) => {
        setClick({
            ...click,
            [e.target.name] : !click[e.target.name]
        })

        if(value[e.target.name].length > 0){
            setClick({
                ...click,
                [e.target.name] : true
            })
        }else{
            setValid(false)
        }
    }

    const onChangeValue = (e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })

        if(value.email.includes("@") && value.email.includes(".")){
            setValid(true)
        }else{
            setValid(false)
        }
    }

    return (
        <Wrapper>
            <Container blue>
                <Icon>
                <FiArrowLeft size = "23" />
                </Icon>
                <Box>
                    <img src="https://kr.accounts.ikea.com/resources/kr//logo.svg" alt=""/>
                    <div className="text">
                        <h1>지금 IKEA에<br/>로그인하세요!</h1>
                        <p>휴대폰 번호를 인증하시면 해당 번호로 간편 로그인이 가능해집니다.</p>
                    </div>
                    <div className="footer-text">
                        <span>IKEA.kr</span>&nbsp;-&nbsp;<a>개인정보처리방침</a>
                        <div>© Inter IKEA Systems B.V. 1999-2020</div>
                    </div>
                </Box>
            </Container>
            <Container>
                <div className = "login-box">
                    <LoginBox>
                        <InputBox>   
                            <Input onFocus={inputFocus} onBlur={inputFocus} onChange={onChangeValue} isClick = {click.email} valid = {valid} email/>
                            <Label isClick = {click.email}>이메일 또는 휴대폰 번호</Label>
                        </InputBox>
                        <InputBox password>
                            <Input onFocus={inputFocus} onBlur={inputFocus} onChange={onChangeValue} isClick = {click.password} />
                            <Label isClick = {click.password}>비밀번호</Label>
                        </InputBox>
                        <a>비밀번호 찾기</a>
                        <Button>로그인</Button>
                    </LoginBox>
                    <Button gray>회원가입</Button>
                </div>
            </Container>
        </Wrapper>
    )
}

export default Login;

const Wrapper = styled.div`
    display : flex;
`

const Container = styled.div`
    flex: ${props => (props.blue ? "4.5" : "8" )};
    position : ${props => (props.blue ? "" : "relative" )};
    height:100vh;
    padding :32px 80px;
    background : ${props => (props.blue ? "#0058A3" : "#ffffff" )};
    color : #ffffff;

    .login-box{
      position:absolute;
      top: 50%;
      transform : translateY(-55%)
    }
`
const Box = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-content : flex-end;
    margin-left : auto;
    width: 256px;
    height: 100%;

    img{
        width : 88px;
        height : 44px;
    }

    .text{
        width : 100%;
        height : 208px;
        margin-top : 16px;
        text-align : left;

        h1{
            font-family: "NotoSansBold";
            font-size : 32px;
            font-weight : 700;
            line-height : 42.67px;
            letter-spacing : -0.64px;
        }

        p{
        font-size : 14px;
        line-height : 24px;
        }
    }

    .footer-text{
    font-size : 11px;
    line-height : 18.85px;
    color : #F2F5F7;

        a{
            text-decoration : underline solid rgb(242, 245, 247);
            font-size : 11px;
            cursor : pointer;
        }
    }
`

const Icon = styled.div`
    position : absolute;
    left : 32px;
    top : 41.375px;
`

const LoginBox = styled.div`
    width:448px;
    height : 262px;
    padding : 16px 0;
    display : flex;
    flex-direction: column;

    a{
        color : #666666;
        font-size : 12px;
        line-height: 1.71429;
        cursor : pointer;
        
        &:hover{
            text-decoration: underline solid rgb(102,102,102);
        }
    }

`
const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    position : relative;
    height:50px;
    margin-bottom:${props => (props.password ? "10px" : "20px" )};
`

const Input = styled.input.attrs(props => ({
    type: props.email ? 'text' : 'password',
    name: props.email ? 'email' : 'password',
  }))`
    height : 50px;
    padding : 24px 0 1px 0;
    border:none;
    border-bottom : ${props => (props.isClick ? "1px solid #0058a3" : "1px solid #929292" )};
    box-shadow: ${props => (props.isClick ? "0 1px 0 #0058a3" : "" )};
    background :  ${props => (props.valid ? "#E8F0FE" : "#ffffff" )};
    font-size : 16px;
`

const Label = styled.label`
    position : absolute;
    top : ${props => (props.isClick ? 0 : "24px" )};
    color : #484848;
    font-size : ${props => (props.isClick ? "12px" : "16px" )};
    line-height:24px;
    transition : 0.2s;
`

const Button = styled.button`
    justify-self : flex-end;
    margin-top :auto;
    width : 448px;
    height : 56px;
    padding : 0 40px;
    border : none;
    border-radius: 40px;
    color : ${props => (props.gray ? "#111111" : "#ffffff" )};
    background : ${props => (props.gray ? "#F5F5F5" : "#0058A3" )};
    font-size : 14px;
    font-weight:700;
    cursor : pointer;
    
    &:hover{
        background : ${props => (props.gray ? "#E0E0E0" : "#004f93" )};
    }
`