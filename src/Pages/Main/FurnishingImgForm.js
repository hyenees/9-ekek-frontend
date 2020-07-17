import React from "react";
import { withRouter } from 'react-router-dom';
import "./FurnishingImgForm.scss";
import arrowIcon from "../../Images/arrowIcon.png";

class FurnishingImgForm extends React.Component {
  state = {
    dotDisplay: "",
    articleDisplay: "",
  };

  dotShow = (id) => {
    this.setState({
      dotDisplay: id,
    });
  };
  dotHide = () => {
    this.setState({
      dotDisplay: "",
    });
  };

  articleShow = (productId) => {
    this.setState(
      {
        articleDisplay: productId,
      },
      () => console.log(this.state.articleDisplay)
    );
  };

  articleHide = () => {
    this.setState({
      articleDisplay: "",
    });
  };

  imageButtonClickHandle = (id) => {
    this.props.history.push(`/products/${id}`);
  }

  render() {
    const { furnishingInfo } = this.props;
    const { dotDisplay, articleDisplay } = this.state;

    return (
      <div className={`furnishing-img item${furnishingInfo.id}`}>
        <img
          src={furnishingInfo.background_img}
          alt="furnishing"
          onMouseOver={() => this.dotShow(furnishingInfo.id)}
          onMouseOut={() => this.dotHide(furnishingInfo.id)}
        ></img>
        {furnishingInfo.product.map((products, idx) => (
          <div
            key={idx}
            onMouseEnter={() => this.dotShow(furnishingInfo.id)}
            onMouseLeave={() => this.dotHide(furnishingInfo.id)}
          >
            <button
              className={`furnishing-btn ${
                products.product_name.split(" ")[0]
              }`}
              onMouseOver={() => this.articleShow(products.id)}
              onMouseLeave={() => this.articleHide()}
              onClick={() => this.imageButtonClickHandle(products.product_id)}
              style={
                ({ position: "absoulute" },
                {
                  top: `${products.product_position_top}`,
                  left: `${products.product_position_left}`,
                  opacity: `${dotDisplay === furnishingInfo.id ? "1" : "0"}`,
                })
              }
            >
              <article
                className="furnishing-product"
                style={{
                  display: `${
                    articleDisplay === products.id ? "flex" : "none"
                  }`,
                }}
              >
                <ul className="product-info">
                  <li className="product-name">
                    {products.product_name.split(" ")[0]}
                  </li>
                  <li className="product-name-korean">
                    {products.product_name.split(" ")[1]}
                  </li>
                  <li className="product-category">
                    {products.product_category}
                  </li>
                  <li className="product-price">{products.product_price}</li>
                </ul>
                <img
                  className="go-to-product"
                  src={arrowIcon}
                  alt="arrow"
                ></img>
              </article>
              <div className="article-shadow"></div>
              <div
                className="mini-dot"
                style={{
                  top: `${products.product_position_top}`,
                  left: `${products.product_position_left}`,
                  opacity: `${dotDisplay === furnishingInfo.id ? "1" : "0"}`,
                }}
              ></div>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(FurnishingImgForm);
