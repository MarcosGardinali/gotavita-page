import React, { useEffect, useState } from 'react'
import style from './secaodepoimentosbeneficios.module.css'
import Botao from '../Botao';
import seloSeguro from '../assets/images/seloSeguro.webp'

export default function SecaoDepoimentosBeneficios() {

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
  
    const buttonWidth = windowWidth < 1023 ? '70' : '40';
    const imageWidth = windowWidth < 1023 ? '60' : '28';

  return (
    <main className={style.conteudo__secao__depoimentos__beneficios}>
        <h2 className={style.secao__depoimentos__beneficios__titulo}>Mais de <strong>30 mil brasileiros</strong> já sentiram os benefícios do <strong style={{color: '#f29f05'}}>GotaVita!</strong> Veja alguns dos depoimentos logo abaixo:</h2>
        <section className={style.container__videos__depoimentos__beneficios}>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e9080302d65b000a085004/embed.html" frameborder="0" title='Vídeo Depoimento'  className={style.videos__depoimentos__beneficios}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e907f702d65b000a084fff/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos__beneficios}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e907fa5d4157000942f2f6/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos__beneficios}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e907fd02d65b000a085002/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos__beneficios}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e91c87e1c7560009bd004c/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos__beneficios}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e91c70909f89000a8faeca/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos__beneficios}></iframe>
        </section>
        <Botao targetId="SecaoComprar" width={buttonWidth}>
            Quero Minha Vitalidade de Volta a Partir de Hoje!
        </Botao>
        <img style={{width: `${imageWidth}%`, height: 'auto'}} src={seloSeguro} alt="Selo de Compra Segura" />
    </main>
  )
}
