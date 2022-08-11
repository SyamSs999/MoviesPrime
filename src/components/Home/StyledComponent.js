import styled from 'styled-components'

const HomeContainer = styled.div`
  background-image: url(${props => props.backgroundSmPath});
  @media (min-width: 768px) {
    background-image: url(${props => props.backgroundLgPath});
  }
`
export default HomeContainer
