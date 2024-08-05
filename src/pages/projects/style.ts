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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
`

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
`

export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
`

export const ProjectsContainer = styled.div`
  animation: slide-up 0.8s ease-out forwards;

  @keyframes slide-up {
    from {
      transform: translateY(15%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`
