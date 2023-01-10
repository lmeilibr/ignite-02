import styled from "styled-components";

export const MainTitle = styled.main`
  padding-top: 5.875rem;
  gap: 3.5rem;
  
  img {
    float: right;
  }
`

export const TitleContainer = styled.div`
  
  max-width: 36.57rem;
  float: left;
  display: flex;
  flex-direction: column;
  


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