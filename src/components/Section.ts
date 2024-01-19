import styled from 'styled-components'

export const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  margin: 2.5rem;
  padding: 2.5rem;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.lightSecondary};
  border-radius: 8px;
  color: ${(props) => props.theme.color.white};
  font-size: 2rem;

  p {
    width: 50%;
  }
`
