import React, { Fragment } from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import ikea from "../../Images/ikea.svg";
import earth from "../../Images/earth.png";
import downarrow from "../../Images/downarrow.png";

class SideBar extends React.Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Top>
            <div className="grform_and_img_box">
              <div
                className="grformclose_box"
                onClick={this.props.NavButtonHandler}
              >
                <GrFormClose size="24" />
              </div>
              <img src={ikea} alt="" width="90" heigh="36" />
            </div>
          </Top>
          <Content>
            <ul className="first_ul">
              <li>
                <a
                  className="all_product"
                  href="https://www.ikea.com/kr/ko/cat/products-products/"
                  role="button"
                  data-index="0"
                >
                  모든 제품
                </a>
              </li>
              <li>
                <a
                  className="digital_showroom"
                  href="https://www.ikea.com/kr/ko/cat/products-products/"
                  role="button"
                  data-index="0"
                >
                  디지털 쇼룸
                </a>
              </li>
              <li>
                <a href="https://homeideas.ikea.kr/new/">아이디어</a>
              </li>
              <li>
                <a href="https://www.ikea.com/kr/ko/stores/">매장 안내</a>
              </li>
              <li>
                <a href="https://www.ikea.com/kr/ko/campaigns/">이달의 혜택</a>
              </li>
              <li>
                <a href="https://www.ikea.com/kr/ko/news/">유용한 정보</a>
              </li>
              <li>
                <a href="https://www.ikea.com/kr/ko/campaigns/">
                  더 낮은 새로운 가격
                </a>
              </li>
            </ul>
            <ul className="second_ul">
              <li>
                <a href="https://www.ikea.com/kr/ko/ikea-family/">
                  IKEA Family
                </a>
              </li>
              <li>
                <a href="https://www.ikea.com/kr/ko/customer-service/">
                  고객지원
                </a>
              </li>
              <li>
                <a href="https://www.ikea.com/kr/ko/customer-service/track-manage-order/">
                  배송조회
                </a>
              </li>
              <li>
                <a href="https://www.ikea.com/kr/ko/profile/">내 프로필</a>
              </li>
            </ul>
          </Content>
          <Bottom>
            <div className="icon_all_box">
              <div className="icon_right2">
                <span className="icon_right_text2">한국어</span>
                <img
                  className="icon_right_image"
                  src={downarrow}
                  size="24"
                  alt="logo"
                ></img>
              </div>
            </div>
            <div className="icon_right">
              <img
                className="icon_right_image"
                src={earth}
                size="24"
                alt="logo"
              ></img>
              <span className="icon_right_text">국가 변경</span>
            </div>
          </Bottom>
        </Container>
      </Fragment>
    );
  }
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top:0;
  bottom: 0;
  left:0;
  width: 480px;
  height: 952px;
  z-index: 3;
  /* display: ${(props) => (props.sideBar ? "block" : "none")} */
  background-color: white;
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  height: 92px;
  margin-bottom: 20px;
  padding: 0px 30px;
  .grform_and_img_box {
    display: flex;
    justify-content: space-between;
    width: 210px;
    height: 92px;
    /* background-color:red; */
    .grformclose_box {
      position: relative;
      right: 10px;
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
  }
`;
const Content = styled.div`
  position: relative;
  left: 150px;
  .first_ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
    height: 305px;
    li {
      font-size: 14px;
      font-weight: 700;
      line-height: 18px;
      text-align: left;
      &:hover {
        text-decoration: underline;
      }
      .all_product {
        font-size: 36px;
        font-weight: 700;
        letter-spacing: -0.64px;
        line-height: 48px;
      }
      .digital_showroom {
        font-size: 36px;
        font-weight: 700;
        letter-spacing: -0.64px;
        line-height: 48px;
      }
    }
  }
  .second_ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 40px;
    width: 300px;
    height: 144px;
    li {
      font-size: 14px;
      text-align: left;
      line-height: 24px;
      padding: 6px;
    }
  }
`;
const Bottom = styled.div`
  display: Flex;
  justify-content: center;
  position: relative;
  top: 320px;
  left: 40px;
  width: 480px;
  height: 96px;
  .icon_all_box {
    display: flex;
    justify-content: center;
  }
  .icon_right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 115px;
    height: 40px;
    margin-right: 10px;
    padding: 10px 20px 10px 20px;
    border-radius: 40px;
    border: 1px solid #dfdfdf;
    font-weight: 700;
    line-height: 1.5;
    .icon_right_text {
      font-size: 12px;
    }
    .icon_right_image {
      width: 24px;
      height: 24px;
    }
  }
  .icon_right2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 115px;
    height: 40px;
    margin-right: 15px;
    padding: 10px 20px 10px 20px;
    border-radius: 40px;
    border: 1px solid #dfdfdf;
    font-weight: 700;
    line-height: 1.5;
    color: black;
    .icon_right_text2 {
      font-size: 12px;
      font-weight: 700;
      line-height: 1.5;
    }
    .icon_right_image {
      width: 15px;
      height: 15px;
    }
  }
`;
export default SideBar;
