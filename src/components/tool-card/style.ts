import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 100px;
  border-radius: 16px;
  border: 1px solid ${(props) => props.theme.colours.stroke};
  padding-block: 12px;
  padding-inline: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);

  transform: perspective(1000px) translateZ(0);
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }

  &:hover {
    transform: perspective(1000px) translateZ(60px);
    background-color: rgba(30, 30, 30, 0.2);
  }

  @media (max-width: 600px) {
    background-color: ${(props) =>
      props.theme.colours['card-background-mobile']};
    backdrop-filter: none;
  }
`
