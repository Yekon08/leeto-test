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

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #fafafb;
  border-radius: 12px;
  padding: 24px;
`;

export { Main, Title, Container };
