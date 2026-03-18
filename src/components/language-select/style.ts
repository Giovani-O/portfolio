import styled from "styled-components";

export const Select = styled.select`
  padding: 8px 20px 8px 12px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colours.stroke};
  background-color: #09090b;
  color: white;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  @media (max-width: 424px) {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;

export const Option = styled.option`
  padding: 8px;
  background-color: #09090b;
  color: white;
`;
