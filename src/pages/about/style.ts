import styled from 'styled-components'

export const Spacer = styled.div`
  height: 100px;
`

export const Bio = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: -${(props) => props.theme.layoutProperties['top-140']};
`

export const UserImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${(props) => props.theme.colours.stroke};
`

export const BioInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  h1 {
    font-size: ${(props) => props.theme.fontSizes.xl};
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.xs};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    text-align: center;
  }

  @media (max-width: 900px) {
    p {
      font-size: ${(props) => props.theme.fontSizes.sm};
    }
  }
`

export const Social = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;

  a {
    transform: perspective(1000px) translateZ(0);
    transition: transform 0.2s ease-in-out;
  }

  a:hover {
    transform: perspective(1000px) translateZ(100px);
  }
`

export const Tools = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* top: -${(props) => props.theme.layoutProperties['top-140']}; */

  h2 {
    margin-block: 40px;
  }
`

export const ToolCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
