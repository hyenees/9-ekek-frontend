import React from "react";
import styled from "styled-components";
import FurnishingImgForm from "./FurnishingImgForm";
import { API_URL } from "../../config";

class ImgContainer extends React.Component {
  state = {
    furnishingData: [],
  };

  componentDidMount() {
    fetch(API_URL + "/product/homefurnishing/")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          furnishingData: res.FurnishingData,
        });
      });
  }

  componentDidUpdate(prevProps) {
    const { buttonClick } = this.props;
    if (prevProps.buttonClick !== buttonClick) {
      fetch(API_URL + `/product/homefurnishing/?page=${this.props.buttonClick}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            furnishingData: res.FurnishingData,
          });
        });
    }
  }

  render() {
    const { furnishingData } = this.state;
    return (
      <Wrapper>
        <div className="img-form">
          {furnishingData.map((furnishing, idx) => (
            <FurnishingImgForm key={idx} furnishingInfo={furnishing} />
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default ImgContainer;

const Wrapper = styled.div`
  margin: 10px 0 0 0;

  .img-form {
    display: grid;
    grid-auto-flow: row dense;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-auto-rows: 160px;
    grid-gap: 1.25rem;
  }
`;
