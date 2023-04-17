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

const ContentContainer = styled.div`
  width: 66.66%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  margin-top: 24px;
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

  & h1 {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #262626;
    margin-bottom: 16px;
  }

  & p {
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

export {
  ReturnLink,
  ContentContainer,
  ImgContainer,
  DateContainer,
  DescContainer,
  InformationsContainer,
  HoursContainer,
};
