import styled from 'styled-components'

export const StyledSeparator = styled.hr`
  border: none;
  height: 1px;
  margin-inline: 12px;
  background-image: radial-gradient(
    circle at center,
    ${(props) => props.theme.colours.stroke},
    ${(props) => props.theme.colours.stroke},
    transparent
  );
`
