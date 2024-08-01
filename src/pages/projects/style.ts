import styled from 'styled-components'

export const Alert = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(255, 180, 0);
  font-weight: ${(props) => props.theme.fontWeights.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  margin: auto;
  border: 2px solid rgb(255, 180, 0);
  border-radius: 8px;
`
