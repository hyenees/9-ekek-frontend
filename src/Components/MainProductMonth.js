import React from "react";
import styled from "styled-components";
import MonthlyContent from "./MonthlyContent";

class MainProductMonth extends React.Component {
  state = { monthlyProduct: [] };
  componentDidMount() {
    fetch("http://10.58.5.220:8000/product/thismonthproduct")
      .then((res) => res.json())
      .then((res) =>
        this.setState(
          {
            monthlyProduct: res.data,
          },
          () => console.log(this.state.monthlyProduct)
        )
      );
  }

  render() {
    const { monthlyProduct } = this.state;
    return (
      <>
        <Title>
          <p className="title">이달의 제품</p>
        </Title>
        <Flex>
          {monthlyProduct.map((MonthlyEvent, idx) => (
            <MonthlyContent key={idx} MonthlyData={MonthlyEvent} />
          ))}
        </Flex>
        <div className="under_line"></div>
      </>
    );
  }
}
const Title = styled.div`
  .title {
    margin-top: 65px;
    font-size: 38px;
    font-weight: bold;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdfdf;
`;

export default MainProductMonth;
