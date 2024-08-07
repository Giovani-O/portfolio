import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-block: 20px;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 80%;
    border-radius: 8px;
  }

  @media (max-width: 600px) {
    img {
      width: 100%;
    }
  }
`

export const Title = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.lg};
  text-align: center;
`

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px 8px;
  margin-block: 20px;
`

export const Tag = styled.span`
  font-size: ${(props) => props.theme.fontSizes.tag};
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid ${(props) => props.theme.colours.stroke};
  color: ${(props) => props.theme.colours.white};

  padding: 4px 12px;
  border-radius: 16px;

  transform: perspective(1000px) translateZ(0);
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: perspective(1000px) translateZ(60px);
    background-color: rgba(30, 30, 30, 0.1);
  }
`

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: justify;
  margin-block: 20px;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.tag};
  }
`

export const LinkLabel = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  margin-bottom: 12px;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.tag};
  }
`
