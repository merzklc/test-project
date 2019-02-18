import styled from "styled-components";
import Nav from "../components/nav";
import { color } from "../style/theme";
import cx from "classnames";
import { Flex, Box } from "@rebass/grid";
import Container from "../layout/container";
import Swiper from "react-id-swiper";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import ProductItem from "../components/product-item";
import data from "./product_data";

const PagesContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Noproduct = styled.div``;

const Outer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: url("/static/background.png");
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #0b0b0b;
    opacity: 0.3;
    z-index: -1;
  }
  .cart {
    background-color: white;
    min-height: 800px;
    width: 100%;
    box-shadow: 0px 0px 17px -2px rgba(0, 0, 0, 0.75);
      .wrapper {
        width: 100%;
        @media screen and (max-width: 1024px) {
          flex-direction: column;
        }
        .product-item-section {
          width: 70%;
          background-color: white;
          height: 100%;
          padding: 45px 55px;
          justify-content: space-between;
          @media screen and (max-width: 1024px) {
            width: 100%;
          }
          .head-title {
            align-items: center;
            padding: 10px 0;
            .title {
              font-size: 22px;
              font-weight: 500;
              color: ${color.text};
            }
            .shop-box {
              background: url("/static/icons/shopping-cart.svg");
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              width: 20px;
              height: 20px;
              margin-left: 10px;
              position: relative;
            }
            .count {
              position: absolute;
              top: -6px;
              left: 16px;
              width: 17px;
              height: 17px;
              background-color: red;
              color: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 11px;
              font-weight: 700;
            }
          }
          .items {
            flex-direction: column;
            height: 100%;
          }
          .no-product-wrapper {
            width: 100%;
            height: 100%;
            padding: 150px 0;
            flex-direction: column;
            align-items: center;
            .title {
              font-size: 20px;
              color: ${color.text};
              margin-bottom: 10px;
            }
            .refresh-page-button {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 150px;
              cursor: pointer;
              height: 50px;
              color: ${color.text};
              background-color: ${color.secondary};
              border-radius: 10px;
              font-size: 14px;
              font-weight: 600;
              margin: 25px 0;
              text-align: center;
              line-height: 50px;
              .refresh {
                background: url("/static/icons/reload.svg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 12px;
                height: 12px;
                margin-left: 10px;
              }
            }
          }
          .sub {
            padding: 50px 0;
            justify-content: space-between;
            .back {
              display: flex;
              align-items: center;
              .left {
                background: url("/static/icons/left-arrow.svg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 12px;
                height: 12px;
                cursor: pointer;
                margin-right: 10px;
              }
              .text {
                color: ${color.text};
                font-size: 14px;
                font-weight: 600;
              }
            }
            .total {
              .text {
                font-size: 20px;
                color: ${color.text};
                font-weight: 300;
                margin-right: 10px;
              }
              .sum {
                font-size: 20px;
                color: ${color.text};
                font-weight: 700;
              }
            }
          }
        }
        .payment-section {
          width: 30%;
          background-color: ${color.primary};
          height: 100%;
          justify-content: space-between;
          @media screen and (max-width: 1024px) {
            width: 100%;
          }
          .title-and-swiper {
            padding: 45px 55px;
            flex-direction: column;
            height: 100%;
            .head-title {
              align-items: center;
              .title {
                font-size: 22px;
                font-weight: 500;
                color: white;
              }
              .credit {
                background: url("/static/icons/credit-card.svg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 20px;
                height: 20px;
                margin-left: 10px;
                position: relative;
              }
            }
            .swiper-container {
              width: 100%;
              padding-bottom: 30px;
              margin-bottom: -30px;
              .swiper-wrapper {
                .swiper-slide.credit-slide {
                  padding-top: 10px;
                  padding-bottom: 15px;
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  .credit-form {
                    height: 100%;
                    margin-top: 25px;
                    .form-group {
                      margin-bottom: 15px;
                      .label {
                        margin-bottom: 5px;
                        font-size: 14px;
                        font-weight: 600;
                        color: white;
                      }
                      .input {
                        padding: 5px;
                        border-radius: 10px;
                        border: 1px solid white;
                        input {
                          width: 100%;
                          border: none;
                          outline: none;
                          background: transparent;
                          color: white;
                          padding: 2.5px 5px;
                          &::placeholder {
                            color: rgba(255, 255, 255, 0.5);
                          }
                        }
                      }
                    }
                    .submit-button {
                      width: 100%;
                      cursor: pointer;
                      height: 50px;
                      color: ${color.text};
                      background-color: ${color.secondary};
                      border-radius: 10px;
                      font-size: 14px;
                      font-weight: 600;
                      margin: 25px 0;
                      text-align: center;
                      line-height: 50px;
                    }
                  }
                }
                .swiper-slide.bill-slide {
                  padding: 25px 0;
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  .bill {
                    width: 100%;
                    .bill-title {
                      color: white;
                      text-align: center;
                      font-size: 17px;
                      font-weight: 300;
                      margin-bottom: 25px;
                    }
                    .bill-form {
                      display: flex;
                      flex-direction: column;
                      width: 100%;
                      .wrapper {
                        margin-bottom: 20px;
                        .label {
                          margin-bottom: 8px;
                          font-size: 14px;
                          font-weight: 600;
                          color: white;
                        }
                        .input {
                          padding: 7.5px;
                          border-radius: 10px;
                          border: 1px solid white;
                          input {
                            width: 100%;
                            border: none;
                            outline: none;
                            background: transparent;
                            color: white;
                          }
                        }
                      }
                      .submit-button {
                        width: 100%;
                        cursor: pointer;
                        height: 50px;
                        color: ${color.text};
                        background-color: ${color.secondary};
                        border-radius: 10px;
                        font-size: 14px;
                        font-weight: 600;
                        margin: 25px 0;
                        text-align: center;
                        line-height: 50px;
                      }
                    }
                  }
                }
              }
              .swiper-pagination {
                bottom: 0;
                .swiper-pagination-bullet {
                  width: 10px;
                  height: 10px;
                  background-color: ${color.text};
                }
                .swiper-pagination-bullet-active {
                  width: 12px;
                  height: 12px;
                  background-color: white;
                }
              }
              .swiper-button-prev {
                background-image: url("/static/icons/swiper-left-arrow.svg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 25px;
                height: 25px;
                top: unset;
                bottom: 0;
              }
              .swiper-button-next {
                background-image: url("/static/icons/swiper-right-arrow.svg");
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                width: 25px;
                height: 25px;
                top: unset;
                bottom: 0;
              }
            }
          }
          .index-button {
            width: 100%;
            height: 70px;
            background-color: ${color.secondary};
            color: ${color.text};
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            outline: none;
            text-align: center;
            line-height: 70px;
          }
        }
      }
    }
  }
`;

class Home extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    cart: [
      { id: 1, quantity: 1 },
      { id: 2, quantity: 1 },
      { id: 3, quantity: 1 }
    ]
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  refresh = () => {
    location.reload();
  };

  onQuantityChange = (id, type) => {
    const { cart } = this.state;
    const product = cart.find(item => item.id === id);

    if (type === "inc") {
      this.setState(prevState => ({
        cart: [
          { id: id, quantity: product.quantity + 1 },
          ...prevState.cart.filter(item => item.id !== id)
        ].sort((a, b) => a.id - b.id)
      }));
    } else {
      this.setState(prevState => ({
        cart: [
          { id: id, quantity: Math.max(product.quantity - 1, 1) },
          ...prevState.cart.filter(item => item.id !== id)
        ].sort((a, b) => a.id - b.id)
      }));
    }
  };

  onItemDeleted = id => {
    const { cart } = this.state;
    this.setState(prevState => ({
      cart: [...prevState.cart.filter(item => item.id !== id)]
    }));
  };

  render() {
    const { classes } = this.props;
    const { name, number, expiry, cvc, focused, issuer, cart } = this.state;

    const params = {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      noSwiping: true,
      slidesPerView: "auto",
      spaceBetween: 100
    };

    return (
      <Container>
        <Outer>
          <PagesContainer>
            <Flex className="cart">
              <Flex className="wrapper">
                <Flex flexDirection="column" className="product-item-section">
                  <Flex className="head-title">
                    <Box className="title">Shopping Cart</Box>
                    <Box className="shop-box">
                      <Box className="count">{cart.length}</Box>
                    </Box>
                  </Flex>
                  <Flex className="items">
                    {cart.length > 0 ? (
                      cart.map(item => {
                        const product = data.find(p => p.id === item.id);
                        return (
                          <ProductItem
                            data={{
                              id: product.id,
                              image: product.image,
                              title: product.title,
                              desc: product.desc,
                              price: product.price,
                              quantity: item.quantity
                            }}
                            onQuantityChange={this.onQuantityChange}
                            key={item.id}
                            onItemDeleted={this.onItemDeleted}
                          />
                        );
                      })
                    ) : (
                      <Noproduct>
                        <Flex className="no-product-wrapper">
                          <Box className="title">
                            No more items in your cart. Please refresh the page.
                          </Box>
                          <Box
                            className="refresh-page-button"
                            onClick={this.refresh}
                          >
                            Refresh
                            <Box className="refresh" />
                          </Box>
                        </Flex>
                      </Noproduct>
                    )}
                  </Flex>
                  <Flex className="sub">
                    <a href="#" className="back">
                      <Box className="left" />
                      <i className="icon-arrow-left" />
                      <Box className="text">Keep shopping</Box>
                    </a>
                    <Flex className="total">
                      <Box className="text">Subtotal:</Box>
                      <Box className="sum">
                        {"$" +
                          cart.reduce((acc, cur) => {
                            return (
                              acc +
                              cur.quantity *
                                data.find(item => item.id === cur.id).price
                            );
                          }, 0)}
                      </Box>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex flexDirection="column" className="payment-section">
                  <Flex className="title-and-swiper">
                    <Flex className="head-title">
                      <Box className="title">Payment</Box>
                      <Box className="credit" />
                    </Flex>
                    <Flex>
                      <Swiper {...params}>
                        <div className="swiper-slide credit-slide">
                          <Cards
                            number={number}
                            name={name}
                            expiry={expiry}
                            cvc={cvc}
                            focused={focused}
                            callback={this.handleCallback}
                          />
                          <form
                            className="credit-form"
                            ref={c => (this.form = c)}
                          >
                            <div className="form-group">
                              <div className="label">Name on Card</div>
                              <div className="input">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  placeholder="Name on Card"
                                  onChange={this.handleInputChange}
                                  onFocus={this.handleInputFocus}
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="label">Card Number</div>
                              <div className="input">
                                <input
                                  type="number"
                                  name="number"
                                  className="form-control"
                                  placeholder="Card Number"
                                  onChange={this.handleInputChange}
                                  onFocus={this.handleInputFocus}
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="label">Valid Thru</div>
                              <div className="input">
                                <input
                                  type="number"
                                  name="expiry"
                                  className="form-control"
                                  placeholder="Valid Thru"
                                  onChange={this.handleInputChange}
                                  onFocus={this.handleInputFocus}
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="label">CVC</div>
                              <div className="input">
                                <input
                                  type="tel"
                                  name="cvc"
                                  className="form-control"
                                  placeholder="CVC"
                                  onChange={this.handleInputChange}
                                  onFocus={this.handleInputFocus}
                                />
                              </div>
                            </div>
                            <div className="submit-button">Save</div>
                          </form>
                        </div>
                        <div className="swiper-slide bill-slide">
                          <Flex flexDirection="column" className="bill">
                            <Box className="bill-title">Billing Address</Box>
                            <form className="bill-form">
                              <div className="wrapper">
                                <div className="label">Name</div>
                                <div className="input">
                                  <input name="name" className="input" />
                                </div>
                              </div>
                              <div className="wrapper">
                                <div className="label">Surname</div>
                                <div className="input">
                                  <input name="last_name" className="input" />
                                </div>
                              </div>
                              <div className="wrapper">
                                <div className="label">Address</div>
                                <div className="input">
                                  <input name="adress" className="input" />
                                </div>
                              </div>
                              <div className="wrapper">
                                <div className="label">Phone</div>
                                <div className="input">
                                  <input name="phone" className="input" />
                                </div>
                              </div>
                              <div className="submit-button">Save</div>
                            </form>
                          </Flex>
                        </div>
                      </Swiper>
                    </Flex>
                  </Flex>
                  <a href="#">
                    <div className="index-button">Checkout</div>
                  </a>
                </Flex>
              </Flex>
            </Flex>
          </PagesContainer>
        </Outer>
      </Container>
    );
  }
}

export default Home;
