import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme.colours['card-background-mobile']};
  border-radius: 8px;
  overflow: hidden;
`

export const ImageContainer = styled.div`
width: 100%;
height: 180px;

@media (min-width: 600px) {
  height: 220px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

export const ContentContainer = styled.div`
  padding: 16px;
`

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  text-align: center;
  margin: 0 0 12px 0;
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`

export const Tag = styled.span`
  font-size: ${(props) => props.theme.fontSizes.tag};
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.colours.stroke};
  color: ${(props) => props.theme.colours.white};
  padding: 4px 12px;
  border-radius: 16px;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.15s ease;
  cursor: pointer;

  &:hover {
    transform: perspective(1000px) translateZ(60px);
    background-color: rgba(30, 30, 30, 0.1);
    border-color: rgba(125, 88, 234, 0.3);
  }
`

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: justify;
  line-height: 1.5;
  white-space: pre-line;
  margin: 0;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.tag};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`

export const PrimaryButton = styled.a`
  flex: 1;
  background: transparent;
  border: 2px solid ${(props) => props.theme.colours.white};
  color: ${(props) => props.theme.colours.white};
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`

export const SecondaryButton = styled.a`
  flex: 1;
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: ${(props) => props.theme.colours.offwhite};
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
