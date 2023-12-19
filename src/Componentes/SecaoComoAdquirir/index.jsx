import React from 'react'
import style from './secaocomoadquirir.module.css'
import comoComprar from '../assets/images/comoComprar.gif'
import passoCompra1 from '../assets/images/passosCompra1.png'
import passoCompra2 from '../assets/images/passosCompra2.png'
import passoCompra3 from '../assets/images/passosCompra3.png'

export default function SecaoComoAdquirir() {
  return (
    <main className={style.conteudo__secao__como__adquirir}>
        <h3 className={style.titulo__secao__como__adquirir}>Como Adquirir?</h3>
        <p className={style.texto__secao__como__adquirir}>Veja logo abaixo como é simples adquirir o seu <strong>GotaVita</strong> com total segurança e transparência.</p>
        <img src={comoComprar} alt="Gif como comprar" className={style.gif__secao__como__adquirir}/>
        <section className={style.container__passos__como__adquirir}>
            <img src={passoCompra1} alt="Imagens Passos de Compra"  className={style.imagens__passos__como__adquirir}/>
            <img src={passoCompra2} alt="Imagens Passos de Compra"  className={style.imagens__passos__como__adquirir}/>
            <img src={passoCompra3} alt="Imagens Passos de Compra"  className={style.imagens__passos__como__adquirir}/>
        </section>
        <h4 className={style.titulo__secao__como__adquirir}>Importante!</h4>
        <p className={style.texto__secao__como__adquirir}>Evite cair em <strong>golpes</strong> ao investir em fórmulas placebo que possam vir a ser vendidas em outros sites!!! O <strong>GotaVita</strong> é vendido de <strong>forma 100% exclusiva</strong> e <strong>segura</strong> nesta, que é a página oficial do mesmo!</p>
        <p className={style.texto__secao__como__adquirir}><strong>Não confie na venda feita através de sites alheios a este!</strong></p>
    </main>
  )
}
