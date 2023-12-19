import React from 'react'
import style from './secaoatencao.module.css'
import Atencao from '../assets/images/imagematencao.webp'

export default function SecaoAtencao() {
    return (
        <main className={style.conteudo__secao__atencao}>
            <section className={style.container__atencao}>
                <h2 className={style.secao__atencao__titulo}>Atenção</h2>
                <h3 className={style.secao__atencao__texto}>Não vendemos GotaVita em nenhum marketplace. TODOS os produtos do nosso laboratório presente no Mercado Livre, Shopee, Americanas, Magazine Luiza, dentre outros marketplaces se tratam de falsificaçoes. Então para evitar golpes, nós não vendemos por lá e não responsabilizamos pelos produtos falsificados que são ofertados neles.</h3>
                <h2 className={style.secao__atencao__subtitulo}>NÃO VENDEMOS O GOTAVITA OFICIAL NO MERCADO LIVRE, SHOPEE OU OUTROS MARKETPLACES</h2>
                <img src={Atencao} alt="Imagem De Marketplaces Proibidos" loading="lazy" className={style.secao__atencao__imagem} />
            </section>
        </main>
    )
}