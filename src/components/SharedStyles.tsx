import { Booking, Containerprops } from "@/interfaces/Styles";
import styled from "styled-components";

const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 24px;
`;

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 12px;
`;

const Container = styled.div<Containerprops>`
  width: 100%;
  height: 100%;
  background: #fafafb;
  border-radius: 12px;

  ${(props) => props.padding && "padding: 16px 32px"}
`;

const SectionTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  color: #8c8c8c;
  text-align: center;
`;

const BookingItemShared = styled.div<Booking>`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : "white")};
  color: white;
  font-size: 14px;

  & img {
    border-radius: 9999px;
  }
`;

export { Main, Title, Container, SectionTitle, BookingItemShared };
