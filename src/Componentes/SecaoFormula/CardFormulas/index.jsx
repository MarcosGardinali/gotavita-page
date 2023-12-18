import React from 'react'
import style from './cardformula.module.css'

export default function CardFormulas({imagem, titulo, texto}) {
  return (
    <section className={style.card__formulas}>
        <img src={imagem} alt="Imagem Benefícios" className={style.imagens__card__formulas}/>
        <h3 className={style.titulo__card__formulas}>{titulo}</h3>
        <p className={style.texto__card__formulas}>{texto}</p>
    </section>
  )
}
