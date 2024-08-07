import styled from 'styled-components'

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.4);
  color: #ffffff;
  border: 1px solid ${(props) => props.theme.colours.stroke};
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.05);
    cursor: not-allowed;
  }

  @media (max-width: 900px) {
    padding: 8px;
  }
`

export const Previous = styled(Button)`
  left: 0;
`

export const Next = styled(Button)`
  right: 0;
`

export const CarouselTrackContainer = styled.div`
  overflow: hidden;
  width: 100%;
`

export const CarouselTrack = styled.ul`
  display: flex;
  transition: transform 0.5s ease;
  user-select: none;
  list-style: none;
`

export const CarouselItem = styled.li`
  min-width: 100%;
  box-sizing: border-box;
  padding: 12px;
`
