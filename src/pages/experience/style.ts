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
`

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: justify;

  &:has(+ p) {
    margin-bottom: 0.75rem;
  }
`

export const ContentImage = styled.img`
  min-width: 400px;
  object-fit: contain;
`

export const ContentLeft = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  min-height: 120px;
  align-items: center;
`

export const ContentRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 40px;
  width: 100%;
  min-height: 120px;
  align-items: center;
`

export const Separator = styled.hr`
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
