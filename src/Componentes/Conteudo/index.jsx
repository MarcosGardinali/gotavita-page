import React from 'react'
import style from './conteudo.module.css'
import SecaoIntroducao from '../SecaoIntroducao'

export default function Conteudo() {
  return (
    <main className={style.conteudo}>
      <SecaoIntroducao />
    </main>
  )
}