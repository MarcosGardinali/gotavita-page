import React, { useEffect, useState } from 'react'
import style from './secaomododeusar.module.css'
import modo1 from '../assets/images/modo1.png'
import modo2 from '../assets/images/modo2.webp'
import modo3 from '../assets/images/modo3.webp'
import Botao from '../Botao';
import seloSeguro from '../assets/images/seloSeguroPreto.webp'

export default function SecaoModoDeUsar() {

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

  const buttonWidth = windowWidth < 1023 ? '70' : '30';
  const imageWidth = windowWidth < 1023 ? '60' : '28';

  return (
    <main className={style.conteudo__secao__modo__de__usar}>  
        <h2 className={style.secao__modo__de__usar__titulo}>Qual o modo de uso?</h2>
        <p className={style.secao__modo__de__usar__texto}>Siga os passos abaixo para ter o melhor resultado com o GotaVita</p>
        <section className={style.container__modos}>
            <img src={modo1} alt="Imagem modo de usar" className={style.modo__imagens}/>
            <img src={modo2} alt="Imagem modo de usar" className={style.modo__imagens}/>
            <img src={modo3} alt="Imagem modo de usar" className={style.modo__imagens}/>
        </section>
        <Botao width={buttonWidth}>
            Quero Experimentar!
        </Botao>
        <img style={{width: `${imageWidth}%`}} src={seloSeguro} alt="Selo de Compra Segura" />
    </main>
  )
}
