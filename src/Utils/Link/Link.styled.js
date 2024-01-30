import styled from "styled-components";
import { Link } from "react-scroll";

export const AnchorLink = styled(Link)`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: var(--primary-green-color);
  border: none;
  border-radius: 500px;

  color: var(--text-color);
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.64px;
  transition: var(--transition);
  &:hover {
    background-color: var(--primary-dark-color);
    color: var(--primary-green-color);
  }
`;
