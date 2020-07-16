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
import SideBarClick from "../../Components/SideBar/SideBarClick";
import SideBarClickFurniture from "../../Components/SideBar/SideBarClickFurniture";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      sideBar: false,
      sideBarClick: false,
      currentIndex: 0,
      subCurrentIndex: 0,
    };
  }

  NavButtonHandler = () => {
    this.setState({ sideBar: !this.state.sideBar });
  };

  GoBackButtonHandler = () => {
    this.setState({ SideBarClick: !this.state.SideBarClick });
  };

  currentIdxHandler = (idx) => {
    this.setState({ currentIndex: idx });
  };

  subCurrentIndexHandler = (idx) => {
    this.setState({ subCurrentIndex: idx });
  };

  render() {
    return (
      <>
        <Nav NavButtonHandler={this.NavButtonHandler} />
        {this.state.sideBar ? (
          <SideBarOption>
            <SideBar
              sideBar={this.state.sideBar}
              NavButtonHandler={this.NavButtonHandler}
              currentIndex={this.state.currentIndex}
              currentIdxHandler={this.currentIdxHandler}
              subCurrentIndexHandler={this.subCurrentIndexHandler}
            />
          </SideBarOption>
        ) : (
          ""
        )}
        {this.state.subCurrentIndex !== 0 && <SideBarClickFurniture />}
        <Container>
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
  width: 100vw;
  overflow: ${(props) => (props.sideBar ? "" : "hidden")};
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.15);
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
