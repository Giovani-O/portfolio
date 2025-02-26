import styled from 'styled-components'

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
    line-height: 1;
  }

  @media (max-width: 900px) {
    p {
      font-size: ${(props) => props.theme.fontSizes.tag};
    }
  }
`

export const Tools = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  /* top: -${(props) => props.theme.layoutProperties['top-140']}; */

  h2 {
    margin-block: 40px;
    text-align: center;
  }
`

export const ToolCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
