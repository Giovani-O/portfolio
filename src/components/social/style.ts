import styled from 'styled-components'

export const SocialIcons = styled.div`
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
