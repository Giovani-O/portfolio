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
