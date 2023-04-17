import Styled from 'styled-components'

const Container = Styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`

const Anouncements = () => {
  return (
    <Container>
        Get flat 30% OFF of your first purchase!!!
    </Container>
  )
}

export default Anouncements