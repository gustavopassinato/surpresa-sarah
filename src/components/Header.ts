import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;
  flex: 1;
  font-size: 2.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  flex-wrap: wrap;

  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
`
