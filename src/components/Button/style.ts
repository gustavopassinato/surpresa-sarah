import styled from 'styled-components'

interface ButtonProps {
  isActive: boolean
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.isActive ? props.theme.color.primary : props.theme.color.secondary};
  padding: 1.5rem;
  margin: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.color.secondary};
  }
`
