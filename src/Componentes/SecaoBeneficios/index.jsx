import React, { useEffect, useState } from 'react'
import style from './secaobeneficios.module.css'
import CardBeneficios from './CardBeneficios'
import imgBeneficio1 from '../assets/images/beneficio1.webp'
import imgBeneficio2 from '..//assets/images/beneficio2.webp'
import imgBeneficio3 from '..//assets/images/beneficio3.webp'
import imgBeneficio4 from '..//assets/images/beneficio4.webp'
import imgBeneficio5 from '..//assets/images/beneficio5.webp'
import Botao from '../Botao'
import seloSeguro from '../assets/images/seloSeguro.webp'

export default function SecaoBeneficios() {

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
    <main className={style.conteudo__secao__beneficios}>
        <h2 className={style.secao__beneficios__titulo}>Benefícios do <strong style={{color: '#ebac1e'}}>GotaVita</strong></h2>
        <p className={style.secao__beneficios__texto}>O suplemento natural que auxilia na manutenção da glicemia, te trazendo mais energia e disposição para aproveitar os prazeres da vida!</p>
        <section className={style.container__benefícios}>
            <CardBeneficios imagem={imgBeneficio1} titulo='Auxilia na promoção da saúde cardiovascular e do bom funcionamento dos vasos sanguíneos:' texto='GotaVita auxilia na manutenção saudável dos vasos sanguíneos e do coração, graças à sua concentração de antioxidantes. Isso pode proporcionar uma sensação de tranquilidade aos nossos clientes, que buscam tratar ou prevenir possíveis efeitos indesejáveis relacionados ao nível elevado de açúcar no sangue.'/>
            <CardBeneficios imagem={imgBeneficio2} titulo='Auxilia na redução da absorção de açúcar:' texto='Quando açúcar e carboidratos são ingeridos, o corpo auxilia com a liberação de enzimas para auxiliar na quebra desses compostos complexos e na produção de glicose. GotaVita pode ter um efeito que auxilia na redução da eficiência desse processo, possibilitando que alguns carboidratos possam passar pelo sistema digestivo sem serem totalmente absorvidos pelo sangue.'/>
            <CardBeneficios imagem={imgBeneficio3} titulo='Auxilia no equilíbrio dos níveis de açúcar no sangue:' texto='Ajuda a manter os níveis de glicose abaixo de 100 mg / dL, medidos com um exame de sangue em jejum, é considerado dentro de uma faixa saudável. Podendo ajudar a manter uma vida completamente normal e livre de preocupações excessiva.'/>
            <CardBeneficios imagem={imgBeneficio4} titulo='Auxilia no aumento da energia e disposição:' texto='O Gota Vita, por meio de sua fórmula inovadora, auxilia no aumento da energia e disposição dos pacientes, contribuindo para uma vida potencialmente mais ativa e com maior bem-estar.'/>
            <CardBeneficios imagem={imgBeneficio5} titulo='Ingredientes naturais:' texto='GotaVita é um composto natural que auxilia aqueles que enfrentam a diabetes e têm interesse em cuidar da saúde de forma adequada.'/>
        </section>
        <Botao targetId="SecaoComprar" width={buttonWidth}>
            Sim! Quero Garantir Meu GotaVita
        </Botao>
        <img style={{width: `${imageWidth}%`, height: 'auto'}} src={seloSeguro} alt="Selo de Compra Segura" />
    </main>
  )
}
