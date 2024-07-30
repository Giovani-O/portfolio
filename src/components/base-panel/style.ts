import styled from 'styled-components'

export const PanelSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

export const PanelContent = styled.div`
  display: flex;
  justify-content: center;

  width: 1200px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colours.stroke};
  margin-inline: 12px;
  margin-block: 40px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
`
