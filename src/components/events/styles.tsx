import { AvailabilityNumber, Booking } from "@/interfaces/Styles";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 24px 128px 54px 128px;
`;

const CardContainer = styled.a`
  width: 100%;
  height: 128px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 171px;
  height: 96px;
  margin-right: 16px;

  & img {
    border-radius: 8px;
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
`;

const BookingContainer = styled.div``;

const BookingItems = styled.div`
  display: flex;
  margin-top: 8px;
`;

const BookingItem = styled.div<Booking>`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : "white")};
  color: ${(props) => (props.counter ? "#595959" : "white")};
  font-size: 14px;
  margin-left: -16px;

  border: ${(props) =>
    props.counter ? "1px solid rgba(192, 196, 207, 0.3)" : "none"};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  box-shadow: ${(props) =>
    props.counter ? "0px 2px 4px rgba(0, 0, 0, 0.03)" : "none"};

  & img {
    border-radius: 9999px;
  }

  &:nth-child(1) {
    margin-left: 0;
  }
`;

const InformationsContainer = styled.div`
  display: flex;
`;

const AvailabilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  margin-left: 60px;
`;

const AvailabilityNumber = styled.p<AvailabilityNumber>`
  font-size: 16px;
  text-align: center;
  color: ${(props) => (props.full ? "#079CEE" : "#F5222D")};
`;

const PriceContainer = styled.div`
  width: 151px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background: url("/roundedBg.svg") no-repeat;
  background-size: 100% 100%;
  padding-right: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: right;
  color: #5b8c00;
  border-radius: 8px;
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
};
