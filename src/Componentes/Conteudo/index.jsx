import React from 'react'
import style from './conteudo.module.css'
import SecaoIntroducao from '../SecaoIntroducao'
import SecaoBeneficiosSintomas from '../SecaoBeneficiosSintomas'
import SecaoModoDeUsar from '../SecaoModoDeUsar'
import SecaoDepoimentos from '../SecaoDepoimentos'
import SecaoFormulaLiquida from '../SecaoFormulaLiquida'
import SecaoBeneficios from '../SecaoBeneficios'
import SecaoFormula from '../SecaoFormula'
import SecaoAtencao from '../SecaoAtencao'

export default function Conteudo() {
  return (
    <main className={style.conteudo}>
      <SecaoIntroducao />
      <SecaoBeneficiosSintomas />
      <SecaoModoDeUsar />
      <SecaoDepoimentos />
      <SecaoFormulaLiquida />
      <SecaoBeneficios />
      <SecaoFormula />
      <SecaoAtencao />
    </main>
  )
}