import React from "react";
import styled from "styled-components";
import deilver from "../Images/deilver.png";
import person from "../Images/person.png";
import like from "../Images/like.png";
import basket from "../Images/basket.png";
import search from "../Images/search.png";
import { IoIosMenu } from "react-icons/io";

class Nav extends React.Component {
  render() {
    return (
      <Container>
        <div className="ioio_menu_box" onClick={this.props.NavButtonHandler}>
          <IoIosMenu size="24" />
        </div>
        <ContainerInner>
          <div className="left_nav_align">
            <img
              class="ikea_logo"
              src="https://www.ikea.com/kr/ko/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg"
            />
            <ul className="nav_text_box">
              <li>
                <a herf="https://www.ikea.com/kr/ko/cat/products-products/">
                  모든 제품
                </a>
              </li>
              <li>
                <a herf="https://www.ikea.com/kr/ko/rooms/">디지털 쇼룸</a>
              </li>
            </ul>
          </div>
          <img className="search" src={search} alt="logo" />
          <Input />
          <div className="nav_right_icon_box">
            <img className="deilver" src={deilver} alt="logo" />
            <img className="person" src={person} alt="logo" />
            <img className="like" src={like} alt="logo" />
            <img className="basket" src={basket} alt="logo" />
          </div>
        </ContainerInner>
      </Container>
    );
  }
}

export default Nav;

const Container = styled.div`
  display: flex;
  width: 94.2%;
  padding: 0px 40px 0px 20px;
  margin: 0 auto;
  height: 90px;
  .ioio_menu_box {
    width: 40px;
    height: 40px;
    margin: 26px 37px 26px 37px;
    padding: 8px;
    border-radius: 40px;
    &:hover {
      background-color: #dfdfdf;
      transition-property: background-color;
      transition-duration: 0.3s;
    }
  }
`;

const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  margin-left: 7px;
  .left_nav_align {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .ikea_logo {
      width: 90px;
      height: 36px;
    }
    .nav_text_box {
      display: flex;
      width: 183.22px;
      margin-left: 32px;
      li {
        display: block;
        padding: 10px 15px 10px 15px;

        a {
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
  }
  .search {
    position: absolute;
    left: 560px;
    z-index: 1;
    width: 19px;
  }
  .nav_right_icon_box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 192px;
    height: 40px;
    margin: 0 -10px 0 40px;
    .deilver {
      width: 22px;
      height: 16px;
    }
    .person {
      width: 16px;
      height: 16px;
    }
    .like {
      width: 17x;
      height: 15px;
    }
    .basket {
      width: 20.56px;
      height: 16px;
    }
  }
`;
const Input = styled.input.attrs({
  type: "search",
  spellcheck: "false",
  placeholder: "검색어 입력",
})`
  position: relative;
  width: 64%;
  height: 50px;
  padding: 13px 54px;
  margin-left: 32px;
  border: 0;
  font-size: 16px;
  background-color: #f5f5f5;
  border-radius: 50em;
`;
