import React from 'react'
import style from './secaocomprar.module.css'
import DezFrascos from '../assets/images/10frascos.png'
import CincoFrascos from '../assets/images/10frascos.png'
import TresFrascos from '../assets/images/10frascos.png'
import UmFrasco from '../assets/images/10frascos.png'

export default function SecaoComprar() {
  return (
    <main className={style.conteudo__secao__comprar} id='SecaoComprar'>
      <h3 className={style.secao__comprar__titulo}>Escolha a melhor opção para você!</h3>
      <p className={style.secao__comprar__texto}><strong>Descontos</strong> especiais e até <strong>90 dias</strong> de garantia total!</p>
      <section className={style.container__valores}>
        <a href='https://bit.ly/46xnNMR' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={DezFrascos} alt="Dez Potes" loading="lazy"/>
        </a>
        <a href='https://bit.ly/3MWzVjw' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={CincoFrascos} alt="Cinco Potes" loading="lazy"/>
        </a>
        <a href='https://bit.ly/3sIc7cz' className={style.card__valores}>
          <img className={style.card__valores__imagem} src={TresFrascos} alt="Três Potes" loading="lazy"/>
        </a>
        <a href='https://bit.ly/3RaYmMI' className={style.card__valores}> 
          <img className={style.card__valores__imagem} src={UmFrasco} alt="Um Pote" loading="lazy"/>
        </a>
      </section>
    </main>
  )
}
