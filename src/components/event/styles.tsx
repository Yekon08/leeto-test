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

const ContentContainer = styled.div`
  width: 66.66%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 16px 24px;
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
  z-index: 999;
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
  background-color: red;
  margin-left: 18px;
  flex: 1;
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
};
