import React from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import SideBar from "../../Components/SideBar/SideBar";
import main_photo from "../../Images/main_photo.png";
import MainProductEvent from "../../Components/MainProductEvent";
import MainProductMonth from "../../Components/MainProductMonth";
import MainInfo from "../../Components/MainInfo";
import Furnishing from "../../Pages/Main/Furnishing";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      sideBar: false,
    };
  }

  NavButtonHandler = () => {
    this.setState({ sideBar: !this.state.sideBar });
  };

  render() {
    return (
      <>
        <Nav NavButtonHandler={this.NavButtonHandler} />
        <SideBarOption sideBar={this.state.sideBar}>
          <SideBar NavButtonHandler={this.NavButtonHandler} />
        </SideBarOption>
        <Container>
          {/* 메인 이미지 & 텍스트 */}
          <img className="main_photo" src={main_photo} alt="main_photo"></img>
          <p className="main_photo_text">
            매년 여름 찾아오는 마법같은 축제와 세일! 최대 70%까지 할인되는
            제품을 확인해보세요.
          </p>
          <Button>자세히 보기</Button>
          <MainProductEvent />
          <MainProductMonth />
          <MainInfo />
        </Container>
        <Furnishing />
        <Footer />
      </>
    );
  }
}

const SideBarOption = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* width: 100%; */
  width: ${(props) => (props.sideBar ? "480px" : "0")};
  overflow: ${(props) => (props.sideBar ? "" : "hidden")};
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.15);
  /* display: ${(props) => (props.sideBar ? "block" : "none")}; */
  transition: width 0.25s ease-in;
`;

const Container = styled.div`
  width: 84%;
  height: 100%;
  margin-top: 90px;
  margin-left: 150px;
  .main_photo {
    width: 100%;
    margin-bottom: 60px;
    cursor: pointer;
  }

  .main_photo_text {
    margin-bottom: 60px;
    font-family: "Noto IKEA";
    font-size: 16px;
    line-height: 26px;
    color: #484848;
  }
`;

const Button = styled.button`
  height: 40px;
  margin-bottom: 60px;
  padding: 0px 20px;
  border: 0;
  border-radius: 40px;
  font-weight: 700;
  font-size: 0.875rem;
  font-family: "Noto IKEA";
  line-height: 1.42857;
  color: #fff;
  background-color: #111;
  cursor: pointer;
`;

export default Main;
