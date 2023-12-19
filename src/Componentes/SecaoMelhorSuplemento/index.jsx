import React, { useEffect, useState } from 'react'
import style from './secaomelhorsuplemento.module.css'
import Botao from '../Botao'

export default function SecaoMelhorSuplemento() {

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

  const buttonWidth = windowWidth < 1023 ? '80' : '70';

    return (
        <main className={style.conteudo__secao__melhor__suplemento}>
            <section className={style.container__melhor__suplemento__textos}>
                <h3 className={style.melhor__suplemento__titulo}>O melhor suplemento natural para os sintomas da diabetes!</h3>
                <p className={style.melhor__suplemento__textos}>Depois de vários testes e depoimentos, finalmente é possível classificar o <strong style={{ color: '#38c610' }}>GotaVita</strong> como um suplemento de alta eficácia! Ele te trata de <strong>dentro para fora</strong> de forma natural.</p>
                <p className={style.melhor__suplemento__textos}>Enquanto outras soluções em cápsulas acabam dificultando a absorção das substâncias. O <strong style={{ color: '#38c610' }}>GotaVita</strong> auxilia na redução dos sintomas causados pela diabetes, causando maior conforto e alivio para os pacientes.</p>
                <Botao targetId="SecaoComprar" width={buttonWidth}>
                    Sim! Quero Garantir Meu Gotavita
                </Botao>
            </section>
        </main>
    )
}
