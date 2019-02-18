import styled from "styled-components";
import { Flex, Box } from "@rebass/grid";
import cx from "classnames";
import { color } from "../style/theme";
import Tooltip from "@material-ui/core/Tooltip";

const Outer = styled.div`
  display: flex;
  .item-wrapper {
    width: 100%;
    padding: 20px 0;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #eee;
    .image-wrapper {
      width: 15%;
      min-width: 15%;
      .image {
        width: 100%;
        padding-top: 100%;
      }
    }
    .title-section {
      width: 25%;
      min-width: 25%;
      padding: 0px 15px;
      color: ${color.text};
      height: 100%;
      justify-content: space-evenly;
      .master-title {
        font-size: 22px;
        font-weight: 700;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .description-title {
        font-size: 15px;
        font-weight: 300;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
    .piece-buttons {
      width: 20%;
      min-width: 20%;
      align-items: center;
      justify-content: center;
      .piece {
        padding: 0px 15px;
        font-size: 15px;
        color: ${color.text};
      }
      .minus {
        background: url("/static/icons/remove.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 12px;
        height: 12px;
        cursor: pointer;
      }
      .plus {
        background: url("/static/icons/add.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 12px;
        height: 12px;
        cursor: pointer;
      }
    }
    .price {
      width: 20%;
      min-width: 20%;
      justify-content: center;
      color: ${color.text};
      font-size: 14px;
      font-weight: 700;
    }
    .deleted {
      width: 20%;
      min-width: 20%;
      justify-content: flex-end;
      .cross {
        background: url("/static/icons/close.svg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
    }
  }
  .modal {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #0b0b0b;
      opacity: 0.3;
      z-index: 1;
    }
    &.is-open {
      display: flex;
    }
    .modal-box {
      width: 300px;
      height: 200px;
      background-color: white;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      z-index: 2;
      .buttons {
        padding: 20px 0;
        .yes {
          width: 100px;
          height: 50px;
          background-color: lightgreen;
          color: black;
          margin-right: 20px;
          text-align: center;
          cursor: pointer;
          line-height: 50px;
        }
        .no {
          width: 100px;
          height: 50px;
          background-color: red;
          color: black;
          text-align: center;
          cursor: pointer;
          line-height: 50px;
        }
      }
      .wrapper {
        position: absolute;
        top: -5px;
        right: -5px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: red;
        border-radius: 50%;
        cursor: pointer;
        .modal-close {
          background: url("/static/icons/close.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          width: 10px;
          height: 10px;
        }
      }
    }
  }
`;

class ProductItem extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    const { isOpen } = this.state;
    if (isOpen === true) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    const { data, onQuantityChange, onItemDeleted } = this.props;
    const { isOpen } = this.state;
    return (
      <Outer>
        <Flex className="item-wrapper">
          <Flex className="image-wrapper">
            <div
              className="image"
              style={{
                background: `url('${data.image}') center/cover no-repeat`
              }}
            />
          </Flex>
          <Flex className="title-section" flexDirection="column">
            <Box className="master-title">{data.title}</Box>
            <Box className="description-title">{data.desc}</Box>
          </Flex>
          <Flex className="piece-buttons">
            <Tooltip title="Remove" placement="top-start">
              <Box
                className="minus"
                onClick={() => onQuantityChange(data.id, "dec")}
              />
            </Tooltip>
            <Box className="piece">{data.quantity}</Box>
            <Tooltip title="Add" placement="top-start">
              <Box
                className="plus"
                onClick={() => onQuantityChange(data.id, "inc")}
              />
            </Tooltip>
          </Flex>
          <Flex className="price">
            <Box className="price-num">${data.price}</Box>
          </Flex>
          <Flex className="deleted">
            <Tooltip title="Delete" placement="top-start">
              <Box className="cross" onClick={this.toggle} />
            </Tooltip>
          </Flex>
        </Flex>
        <Flex className={cx("modal", { "is-open": isOpen === true })}>
          <Flex className="modal-box">
            Are you sure want to delete the product from your cart?
            <Flex className="buttons">
              <div className="yes" onClick={() => onItemDeleted(data.id)}>
                Delete
              </div>
              <div className="no" onClick={this.toggle}>
                Dont delete
              </div>
            </Flex>
            <Box className="wrapper" onClick={this.toggle}>
              <Box className="modal-close" />
            </Box>
          </Flex>
        </Flex>
      </Outer>
    );
  }
}

export default ProductItem;
