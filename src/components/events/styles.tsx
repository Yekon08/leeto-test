import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 24px 128px;
`;

const CardContainer = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 16px;
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

export { ListContainer, CardContainer, ImgContainer, DescContainer };
