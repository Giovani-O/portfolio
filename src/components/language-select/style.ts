import styled from 'styled-components'

export const Select = styled.select`
  padding: 8px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colours.stroke};
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
`

export const Option = styled.option`
  padding: 8px;
`
