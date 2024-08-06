import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-block: 80px 40px;
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
