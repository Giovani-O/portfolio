import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-bottom: 40px;
`

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.regular};
`

export const Card = styled.div`
  width: 100%;
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  overflow: hidden;
`

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: justify;

  &:has(+ p) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`

export const ContentImage = styled.img`
  width: 400px;
  object-fit: contain;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const ContentLeft = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  min-height: 120px;
  align-items: center;

  animation: slide-left 0.8s ease-out forwards;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }

  @keyframes slide-left {
    from {
      transform: translateX(25%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`

export const ContentRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 40px;
  width: 100%;
  min-height: 120px;
  align-items: center;
  animation: slide-right 0.8s ease-out forwards;

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }

  @keyframes slide-right {
    from {
      transform: translateX(-25%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`
