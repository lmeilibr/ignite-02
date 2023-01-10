import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 0;
  padding: 0;

  background: ${(props) => props.theme['background']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
