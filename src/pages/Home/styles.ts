import styled from "styled-components";

export const MainTitle = styled.main`
  padding-top: 5.875rem;
  gap: 3.5rem;
  display: flex;
  flex-direction: row;
  
  img {
    float: right;
    display: flex;
    margin-left: auto;
  }
`

export const TitleContainer = styled.div`
  
  max-width: 36.57rem;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 1rem;

    color: ${(props) => props.theme["base-title"]};
    text-align: left;
    

  }

  h2 {
    display: flex;
    font-family: "roboto", sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    text-align: left;
  }
`

export const Article = styled.article`
  h2 {
    text-align: left;
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.3;
    font-family: "Baloo 2", sans-serif;
    
  }

`

export const IntroContainer = styled.div`
  font-family: "Roboto Light", sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 4.125rem;

  div {
    height: 2rem;
    width: 50%;
    display: flex;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    align-items: center;
  }
  
  span{
    position: relative;
    height: 32px;
    width: 32px;
    align-items: center;
    align-content: center;
    
    svg:last-child{
      position: absolute;
      left: 25%;
      bottom: 25%;
    }
  }
`