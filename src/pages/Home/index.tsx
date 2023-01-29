import imagemHome from '../../assets/imagemHome.svg'
import {Article, IntroContainer, MainTitle, TitleContainer} from "./styles";
import React from "react";
import {Circle, Coffee, Package, ShoppingCart, Timer} from "phosphor-react";
import {defaultTheme} from "../../styles/themes/default";

export function Home() {
    return (
        <>
            <MainTitle>
                <div>
                    <TitleContainer>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
                    </TitleContainer>
                    <IntroContainer>
                        <div>
                            <span>
                                <Circle size={32} weight="fill" color={defaultTheme["yellow-dark"]}/>
                                <ShoppingCart size={16} weight="fill" color="white"/>
                            </span>
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <span>
                                <Circle size={32} weight="fill" color={defaultTheme["base-text"]}/>
                                <Package size={16} weight="fill" fill="white"/>
                            </span>
                            <p>Embalagem mantém o café intactos</p>
                        </div>
                        <div>
                            <span>
                                <Circle size={32} weight="fill" color={defaultTheme["yellow"]}/>
                                 <Timer size={16} weight="fill" fill="white"/>
                            </span>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <span>
                                <Circle size={32} weight="fill" color={defaultTheme["purple"]}/>
                                <Coffee size={16} weight="fill" fill="white"/>
                            </span>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </IntroContainer>
                </div>
                <img src={imagemHome} alt=""/>
            </MainTitle>
            <Article>
                <h2>Nossos Cafés</h2>
            </Article>
        </>
    )
}