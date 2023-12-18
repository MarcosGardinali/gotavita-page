import React, { useEffect, useState } from 'react'
import style from './secaoformulaliquida.module.css'
import imgComprimido from '../assets/images/imagemcomprimido.webp'
import imgGota from '../assets/images/imagemcontagotas.webp'
import Botao from '../Botao'

export default function SecaoFormulaLiquida() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const buttonWidth = windowWidth < 1023 ? '80' : '25';

  return (
    <main className={style.conteudo__secao__formula__liquida}>
        <h2 className={style.secao__formula__liquida__titulo}>Nossa <strong>fórmula líquida</strong> torna a absorção dos nutrientes até <strong style={{color: '#ebac1e'}}>10x mais eficaz</strong> em comparação aos suplementos em <strong>cápsulas!</strong></h2>
        <section className={style.container__imagens__formula__liquida}>
          <img src={imgComprimido} alt="Imagem de comprimido" className={style.secao__formula__liquida__imagem}/>
          <img src={imgGota} alt="Imagem de conta gotas" className={style.secao__formula__liquida__imagem}/>
        </section>
        <Botao width={buttonWidth}>
            Sim! Quero Garantir Meu Gotavita
        </Botao>
    </main>
  )
}
