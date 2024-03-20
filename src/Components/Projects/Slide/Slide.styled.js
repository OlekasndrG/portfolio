import styled from "styled-components";
import { desktop, tablet } from "../../../Utils/Breakpoints/Breakpoints";
export { tablet, desktop } from "../../../Utils/Breakpoints/Breakpoints";
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
    width: 100%;
    object-fit: fill;
    max-height: 300px;

    @media screen and (min-width: ${tablet}) {
      max-height: 400px;
    }

    @media screen and (min-width: ${desktop}) {
      max-height: 500px;
    }
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
