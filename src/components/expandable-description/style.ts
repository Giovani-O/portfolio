import styled from 'styled-components'

export const ShowMoreButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colours.white};
  font-size: 0.8rem;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  cursor: pointer;
  padding: 0;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`
