import React from 'react'
import style from './cardbeneficios.module.css'

export default function CardBeneficios({imagem, titulo, texto}) {
  return (
    <section className={style.card__beneficios}>
        <img src={imagem} alt="Imagem Benefícios" className={style.imagens__card__beneficios}/>
        <h3 className={style.titulo__card__beneficios}>{titulo}</h3>
        <p className={style.texto__card__beneficios}>{texto}</p>
    </section>
  )
}
