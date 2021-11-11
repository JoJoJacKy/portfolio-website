import styled from '@emotion/styled'

// My scuffed animation

const Scale = styled.span`
  transition: all 0.6s ease-in;

  &:hover * {
    transform: scale(0.96);
  }
`

export default Scale
