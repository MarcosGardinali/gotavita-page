import React, { useEffect, useState } from 'react'
import style from './secaoformula.module.css'
import frasco from '../assets/images/imagemfrasco.png'
import formula1 from '../assets/images/formula1.webp'
import formula2 from '../assets/images/formula2.webp'
import formula3 from '../assets/images/formula3.webp'
import formula4 from '../assets/images/formula4.webp'
import formula5 from '../assets/images/formula5.webp'
import CardFormulas from './CardFormulas'
import Botao from '../Botao'
import seloSeguro from '../assets/images/seloSeguroPreto.webp'

export default function SecaoFormula() {

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

  const buttonWidth = windowWidth < 1023 ? '75' : '35';
  const imageWidth = windowWidth < 1023 ? '65' : '25';

  return (
    <main className={style.conteudo__secao__formula}>
        <section className={style.container__texto__imagem}>
            <section className={style.container__textos__formula}>
                <h3 className={style.secao__formula__titulo}>Natural e eficaz!</h3>
                <p className={style.secao__formula__texto}>Este produto é composto por <strong>ingredientes naturais</strong> e <strong style={{color: '#ff5300'}}liberado></strong> pela <strong style={{color: '#ff5300'}}>Anvisa</strong> nos termos da <strong>RDC 240 de 26/07/2018,</strong> sendo dispensado de registro, pois é avaliado como <strong style={{color: '#ff5300'}}>100% seguro</strong> para o consumo da população, garantindo sua eficácia e qualidade sem efeitos colaterais nos consumidores.</p>
                <p className={style.secao__formula__texto}>O tempo de eficácia varia de organismo para organismo, por isso é extremamente importante <strong>consumir</strong> de <strong>forma adequada,</strong> seguindo as orientações da embalagem.</p>
            </section>
            <img src={frasco} alt="Imagem Frasco" className={style.imagem__frasco}/>
        </section>
        <section className={style.container__formula}>
          <CardFormulas imagem={formula1} titulo='Óleo de Persea Americana:' texto='O óleo extraído através de prensagem a frio Americana auxilia na possível redução dos índices de glicose (açúcar no sangue), podendo auxiliar também na melhoria dos triglicérides e marcadores inflamatórios associados ao desenvolvimento do alto índice glicêmico. Além disso, é sugerido um possível efeito cardioprotetor, o qual poderia auxiliar na prevenção de doenças cardiovasculares. Ressalta-se ainda o potencial de contribuição para a produção de insulina pelo organismo.'/>
          <CardFormulas imagem={formula2} titulo='D-L-ALFA-TOCOFEROL (vitamina E):' texto='Um antioxidante natural que auxilia na redução da inflamação, ajuda a inibir a agregação plaquetária e contribui para a melhoria da função imunológica. O alfa-tocoferol tem propriedades antioxidantes que auxiliam na prevenção de possíveis reações de oxidação em outras estruturas corporais ou nutrientes.'/>
          <CardFormulas imagem={formula3} titulo='Tocoferol:' texto='O Tocoferol auxilia nos processos metabólicos relacionados à eliminação dos radicais livres, ajudando a inibir a formação de toxinas prejudiciais ao organismo. Esse nutriente demonstrou auxiliar, em estudos clínicos, na melhoria da função cerebral e pode contribuir para a redução dos níveis de colesterol.'/>
          <CardFormulas imagem={formula4} titulo='Coenzima Q10' texto='A concentração notável da Coenzima Q10 presente no GOTAVITA, combinada com o Óleo de Persea Americana em suas formas mais puras e livres de contaminações, auxilia na oferta de energia ao organismo, pode contribuir para o alívio de dores de cabeça, auxilia na redução do colesterol e pode ter efeitos benéficos no funcionamento do coração.'/>
          <CardFormulas imagem={formula5} titulo='RETINOL (vitamina A):' texto='O retinol auxilia na melhoria da qualidade da pele e pode ter um efeito positivo na redução do embaçamento da visão, auxiliando assim na sensação de rejuvenescimento.'/>
        </section>
        <Botao targetId="SecaoComprar" width={buttonWidth}>
            Sim! Quero Garantir Meu GotaVita
        </Botao>
        <img style={{width: `${imageWidth}%`, height: 'auto'}} src={seloSeguro} alt="Selo de Compra Segura" />
    </main>
  )
}
