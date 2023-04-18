import {
  ActiveProps,
  AvailabilityNumber,
  Booking,
  SwitchBtnProps,
} from "@/interfaces/Styles";
import styled from "styled-components";
import { BookingItemShared } from "../SharedStyles";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 24px 128px 54px 128px;

  @media (max-width: 768px) {
    padding: 16px 24px 24px 24px;
  }
`;

const LinkContainer = styled.div<ActiveProps>`
  width: 100%;
  height: auto;
  cursor: ${(props) => (props.active === "past" ? "not-allowed" : "pointer")};
`;

const CardContainer = styled.a<ActiveProps>`
  width: 100%;
  height: 128px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: ${(props) => (props.active === "past" ? "none" : "auto")};

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 171px;
  height: 96px;
  margin-right: 16px;

  & img {
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const DescContainer = styled.div`
  width: 360px;

  & h3 {
    font-weight: 600;
    font-size: 20px;
    color: #262626;
    margin-bottom: 12px;
  }

  & p {
    font-weight: 600;
    color: #079cee;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 16px 0;
  }
`;

const BookingContainer = styled.div``;

const BookingItems = styled.div`
  display: flex;
  margin-top: 8px;
`;

const BookingItem = styled(BookingItemShared)<Booking>`
  background-color: ${(props) => (props.color ? props.color : "white")};
  color: ${(props) => (props.counter ? "#595959" : "white")};
  margin-left: -16px;

  border: ${(props) =>
    props.counter ? "1px solid rgba(192, 196, 207, 0.3)" : "none"};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  box-shadow: ${(props) =>
    props.counter ? "0px 2px 4px rgba(0, 0, 0, 0.03)" : "none"};

  &:nth-child(1) {
    margin-left: 0;
  }
`;

const InformationsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AvailabilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  margin-left: 60px;

  @media (max-width: 768px) {
    align-items: baseline;
  }
`;

const AvailabilityNumber = styled.p<AvailabilityNumber>`
  font-size: 16px;
  text-align: center;
  color: ${(props) =>
    props.active === "past" ? "#BFBFBF" : props.full ? "#079CEE" : "#F5222D"};
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const PriceContainer = styled.div<ActiveProps>`
  width: 151px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  ${(props) =>
    props.active === "past"
      ? `background: url("/roundedBgDisabled.svg");`
      : `background: url("/roundedBg.svg ");`}
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-right: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: right;
  color: ${(props) => (props.active === "past" ? "#BFBFBF" : "#5b8c00")};
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 16px 0;
    text-align: center;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    background: ${(props) => (props.active === "past" ? "#FAFAFA" : "#fcffe6")};
  }
`;

const SwitchContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  padding: 4px;
  align-self: baseline;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
  }
`;

const SwitchBtn = styled.button<SwitchBtnProps>`
  border: none;
  background: #ebf7ff;
  border-radius: 4px;
  padding: 4px 16px;
  font-size: 16px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#ebf7ff" : "transparent")};
  color: ${(props) => (props.active ? "#079CEE" : "#8295A9")};
  transition: all 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export {
  ListContainer,
  CardContainer,
  LeftContainer,
  ImgContainer,
  DescContainer,
  BookingContainer,
  BookingItems,
  BookingItem,
  InformationsContainer,
  AvailabilityContainer,
  AvailabilityNumber,
  PriceContainer,
  SwitchContainer,
  SwitchBtn,
  LinkContainer,
};
