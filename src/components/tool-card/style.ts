import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 44px;
  min-width: 120px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.03);
  transition: background-color 0.15s ease, border-color 0.15s ease;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme.colours.offwhite};
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
    border-color: rgba(125, 88, 234, 0.3);
  }

  @media (max-width: 600px) {
    background-color: ${(props) =>
      props.theme.colours['card-background-mobile']};
  }
`
