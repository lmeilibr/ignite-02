import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 2.5rem;
    margin-left: 0;
    flex:1;
  }

  nav {
    display: flex;
    gap: 0.75rem;
    height: 100%;
    align-items: center;
    justify-content: right;
    padding: 1rem;
    flex: 1;

    a {
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow']};
      border-radius: 6px;
      height: 2.375rem;
      padding: 0.5rem;
    }


    div {
      align-items: center;
      height: 2.375rem;
      display: flex;
      background-color: ${(props) => props.theme['purple-light']};
      border-radius: 6px;
      padding: 0.5rem;
      color: ${(props) => props.theme['purple']};


      span {
        color: ${(props) => props.theme['purple-dark']};
        font-size: 0.875rem;
        line-height: 1.3;
      }
    }
  }
`
