import styled from 'styled-components'

export const PanelSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  animation: slide-up 0.8s ease-out forwards;

  @keyframes slide-up {
    from {
      transform: translateY(25%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const PanelContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 1200px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colours.stroke};
  margin-inline: 12px;
  margin-block: 40px 0;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);

  @media (max-width: 900px) {
    padding-inline: 12px;
  }
`
