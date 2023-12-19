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
import SecaoMelhorSuplemento from '../SecaoMelhorSuplemento'
import SecaoFabricacao from '../SecaoFabricacao'
import SecaoComprar from '../SecaoComprar'
import SecaoComoAdquirir from '../SecaoComoAdquirir'
import SecaoDepoimentosBeneficios from '../SecaoDepoimentosBeneficios'
import SecaoFaq from '../SecaoFAQ'

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
      <SecaoMelhorSuplemento />
      <SecaoFabricacao />
      <SecaoComprar />
      <SecaoComoAdquirir />
      <SecaoDepoimentosBeneficios />
      <SecaoFaq />
    </main>
  )
}