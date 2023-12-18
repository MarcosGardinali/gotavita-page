import React, { useEffect, useState } from 'react'
import style from './secaobeneficiossintomas.module.css'
import beneficio1 from '../assets/images/beneficio_dor_nas_costas.webp'
import beneficio2 from '../assets/images/beneficio_formigamento.webp'
import beneficio3 from '../assets/images/beneficio_visao_embacada.webp'
import Botao from '../Botao';
import seloSeguro from '../assets/images/seloSeguroPreto.webp'

export default function SecaoBeneficiosSintomas() {
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
    <main className={style.conteudo__secao__beneficios__sintomas}>
        <h2 className={style.secao__beneficios__sintomas__titulo}>O <strong style={{color:'#006e05', fontWeight:700 }}>GotaVita</strong> auxilia nos sintomas causados pelo <strong style={{color:'#ff5300', fontWeight:700 }}>Diabetes:</strong></h2>
        <section className={style.container__beneficios__sintomas}>
            <img src={beneficio1} alt="Imagem benefício dor nas costas" className={style.beneficios__sintomas__imagens}/>
            <img src={beneficio2} alt="Imagem benefício formigamento" className={style.beneficios__sintomas__imagens}/>
            <img src={beneficio3} alt="Imagem benefício visão embaçada" className={style.beneficios__sintomas__imagens}/>
        </section>
        <p className={style.secao__beneficios__sintomas__texto}>E muito mais!</p>
        <Botao width={buttonWidth}>
            Quero Experimentar!
        </Botao>
        <img style={{width: `${imageWidth}%`}} src={seloSeguro} alt="Selo de Compra Segura" />
    </main>
  )
}
