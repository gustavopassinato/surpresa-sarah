import styled from 'styled-components'

export const HeaderStyled = styled.header`
  display: flex;
  flex: 1;
  height: 3.5rem;
  font-size: 2.5rem;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
`
