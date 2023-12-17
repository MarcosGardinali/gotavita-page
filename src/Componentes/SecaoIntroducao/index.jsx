import React from 'react'
import style from './secaointroducao.module.css'
import logo from '../assets/images/logogotavita.webp'
import { FaCheck } from 'react-icons/fa';
import Botao from '../Botao';
import selos from '../assets/images/seloSeguro.webp'

export default function SecaoIntroducao() {
  return (
    <main className={style.conteudo__secao__introducao}>
      <section className={style.secao__introducao__textos}>
        <img src={logo} alt="Logo" className={style.secao__introducao__textos__imagem} />
        <h1 className={style.secao__introducao__textos__titulo}>O Suplemento Natural mais Querido do Brasil</h1>
        <h2 className={style.secao__introducao__textos__subtitulo}>Auxilia no controle dos sintomas que tem tornado os seus dias mais difíceis</h2>
        <section className={style.container__primeira__textos}>
          <p className={style.primeira__textos}><FaCheck className={style.icone__check} /> Fortalece o sistema imunológico</p>
          <p className={style.primeira__textos}><FaCheck className={style.icone__check} /> Ajuda a diminuir o formigamentos nas mão e pés</p>
          <p className={style.primeira__textos}><FaCheck className={style.icone__check} /> Te dá mais energia e vitalidade para viver os dias</p>
          <p className={style.primeira__textos}><FaCheck className={style.icone__check} /> Ajuda a diminuir as restrições alimentares</p>
          <p className={style.primeira__textos}><FaCheck className={style.icone__check} /> Auxilia na cicatrização de feridas na pele, diminuindo os riscos de que evoluam e possam vir a gangrenar.</p>
          <p className={style.primeira__textos}><FaCheck className={style.icone__check} /> Auxilia no controle da glicemia, prevenindo problemas na visão, por exemplo</p>
          <p className={style.primeira__textos}><FaCheck className={style.icone__check} /> Ajuda a diminuir dores nas pernas e costas</p>
          <p className={style.primeira__textos}><FaCheck className={style.icone__check} /> E muito mais...</p>
        </section>
        <Botao>
          Quero Aproveitar Agora!
        </Botao>
        <img src={selos} alt="Selos de compra segura" width='70%' />
      </section>
    </main>
  )
}
