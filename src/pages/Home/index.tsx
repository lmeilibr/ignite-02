import imagemHome from '../../assets/imagemHome.svg'
import {Article, MainTitle, TitleContainer} from "./styles";
import React from "react";

export function Home() {
    return (
        <>
            <MainTitle>
                <div>
                    <TitleContainer>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                    </TitleContainer>
                    <img src={imagemHome} alt=""/>
                </div>
            </MainTitle>
            <Article>
                <h2>Nossos Cafés</h2>
            </Article>
        </>
    )
}