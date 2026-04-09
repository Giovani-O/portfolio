import styled from "styled-components";
import { BREAKPOINT_MOBILE } from "../../../constants";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: ${BREAKPOINT_MOBILE}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ExpandButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-block: 24px;
`;

export const ExpandButton = styled.button`
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: ${(props) => props.theme.colours.white};
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
