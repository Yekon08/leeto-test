import { ButtonPriceProps } from "@/interfaces/Styles";
import Link from "next/link";
import styled from "styled-components";

const ReturnLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
  color: #8295a9;

  & img {
    margin-right: 8px;
  }
`;

const ContainerFlex = styled.div`
  display: flex;
  margin-top: 24px;
`;

const LeftSide = styled.div`
  width: 66.66%;
  height: auto;

  & h3 {
    font-weight: 600;
    font-size: 16px;
    color: black;
    margin-bottom: 16px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 16px 24px;

  &:nth-child(1) {
    margin-bottom: 24px;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 208px;
  & img {
    border-radius: 8px;
  }
`;

const DateContainer = styled.div`
  width: 96px;
  height: 96px;
  background: #ebf7ff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #079cee;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 16px;
  margin-top: -46px;
  z-index: 50;
  position: relative;

  & p:nth-last-child(1) {
    margin-top: 6px;
    font-size: 24px;
  }
`;

const InformationsContainer = styled.div`
  display: flex;
`;

const DescContainer = styled.div`
  margin-left: 16px;
  margin-top: 16px;
  flex: 1;

  & h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #262626;
    margin-bottom: 16px;
  }

  & h4 {
    font-weight: 600;
    font-size: 14px;
    color: #8c8c8c;
    margin-bottom: 8px;
  }

  & span {
    font-size: 16px;
    color: #079cee;
  }

  & p {
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    color: #8c8c8c;
  }
`;

const HoursContainer = styled.div`
  padding: 8px 16px;
  background: #ebf7ff;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  color: #079cee;
  display: inline-block;
  margin-bottom: 16px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

const PriceContainer = styled.div`
  width: 100%;
  height: auto;
  margin-left: 18px;
  flex: 1;
`;

const ReservationContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;

  & span {
    width: 100%;
    background: #f8fdd9;
    border-radius: 8px;
    padding: 16px 0;
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 20px;
    color: #567f0a;
    margin-bottom: 16px;
  }
`;

const ButtonPrice = styled.button<ButtonPriceProps>`
  width: 100%;
  background: ${(props) => (props.modify ? "transparent" : "#567f0a")};
  border-radius: 8px;
  border: none;
  display: block;
  padding: 8px 0;
  color: #ffffff;
  color: ${(props) => (props.modify ? "#F5222D" : "white")};
  font-size: 16px;

  ${(props) =>
    props.modify
      ? "border: 1px solid #F5222D"
      : "box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08)"}
`;

const LegalContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 16px;
  color: #8c8c8c;
  font-size: 14px;

  & h6 {
    font-weight: 600;
    margin-bottom: 8px;
  }

  & span {
    font-weight: bold;
  }
`;

const TableHeader = styled.div`
  background: #f6f8fa;
  border-radius: 8px;
  padding: 8px 16px 8px 72px;
  color: #8295a9;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 38px;
  margin-bottom: 18px;
`;

const BookingItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    font-size: 14px;
    text-align: right;
    color: #006d75;
    margin-right: 4px;
  }
`;

const BookingNames = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin-left: 16px;
    font-weight: 400;
    font-size: 14px;
    color: #595959;
  }
`;

const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

const ModalContainer = styled.div`
  background-color: white;
  width: auto;
  height: auto;
  padding: 32px;
  display: inline-flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
  border-radius: 12px;
  flex-direction: column;
  gap: 12px;

  & input {
    margin-left: 8px;
    padding: 8px 12px;
    display: inline;
    max-width: 60px;
    border-radius: 8px;
    border: none;
    border: 1px solid #595959;
  }

  & span {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;

export {
  ReturnLink,
  ContentContainer,
  ImgContainer,
  DateContainer,
  DescContainer,
  InformationsContainer,
  HoursContainer,
  FlexContainer,
  PriceContainer,
  ContainerFlex,
  ReservationContainer,
  LegalContainer,
  LeftSide,
  TableHeader,
  BookingItems,
  BookingNames,
  BookingContainer,
  ModalContainer,
  ButtonPrice,
};
