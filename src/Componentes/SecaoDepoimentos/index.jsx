import React, { useEffect, useState } from 'react'
import style from './secaodepoimentos.module.css'
import Botao from '../Botao'
import seloSeguro from '../assets/images/seloSeguro.webp'

export default function SecaoDepoimentos() {

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
    <main className={style.conteudo__secao__depoimentos}>
        <h2 className={style.secao__depoimentos__titulo}>Mais de <strong>30 mil brasileiros</strong> já sentiram os benefícios do <strong style={{color: '#f29f05'}}>GotaVita!</strong> Veja alguns dos depoimentos logo abaixo:</h2>
        <section className={style.container__videos__depoimentos}>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e917b87b941e0009cb671b/embed.html" frameborder="0" title='Vídeo Depoimento'  className={style.videos__depoimentos}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e907f402d65b000a084ffd/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e91c75909f89000a8faecc/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e91c79909f89000a8faecf/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e91c8a7b941e0009cb6744/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e91c927b941e0009cb6747/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e974b7fc6f5800092771f9/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e97978fc6f580009277213/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos}></iframe>
            <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e9795f909f89000a8fb20c/embed.html" frameborder="0" title='Vídeo Depoimento' className={style.videos__depoimentos}></iframe>
        </section>
        <Botao targetId="SecaoComprar" width={buttonWidth}>
            Quero Minha Vitalidade de Volta a Partir de Hoje!
        </Botao>
        <img style={{width: `${imageWidth}%`, height: 'auto'}} src={seloSeguro} alt="Selo de Compra Segura" />
    </main>
  )
}
