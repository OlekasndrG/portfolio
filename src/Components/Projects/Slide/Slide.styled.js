import styled from "styled-components";

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  height: 90%;
  h2 {
    font-size: 25px;
    text-align: center;
  }
  p {
    font-size: 20px;
  }
  img {
    max-height: 500px;
    width: 100%;
    object-fit: fill;
  }
  a {
    font-size: 20px;
    color: var(--primary-green-color);
    margin: -10px 0;
  }
`;
export const StackContainer = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.3;
  font-size: 18px;
  font-weight: bold;
`;
