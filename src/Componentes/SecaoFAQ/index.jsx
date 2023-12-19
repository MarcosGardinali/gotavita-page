import React, { useState } from 'react'
import style from './secaofaq.module.css'

export default function SecaoFaq() {

    const [natural, setNatural] = useState(false);
    const [contraindicacao, setContraindicacao] = useState(false);
    const [entrega, setEntrega] = useState(false);
    const [usar, setUsar] = useState(false);

    const toggleNatural = () => {
        setNatural(!natural);
    };

    const toggleContraindicacao = () => {
        setContraindicacao(!contraindicacao);
    };

    const toggleEntrega = () => {
        setEntrega(!entrega);
    };

    const toggleUsar = () => {
        setUsar(!usar);
    };

  return (
    <main className={style.conteudo__secao__duvidas}>
            <h2>Perguntas Frequentes (FAQ)</h2>
            <section className={style.container__duvidas}>
                <section className={style.duvidas} onClick={toggleNatural}>
                    <h3 className={style.duvidas__titulo}>O GotaVita é natural?</h3>
                    {natural && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                        <p><span style="color: #000;">Este produto é composto por ingredientes naturais."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleContraindicacao}>
                    <h3 className={style.duvidas__titulo}>Tem contraindicação?</h3>
                    {contraindicacao && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: #000;">Sim! O GotaVita auxilia aqueles que não são lactantes, gestantes ou hipoglicêmicos."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleEntrega}>
                    <h3 className={style.duvidas__titulo}>Qual o prazo de entrega?</h3>
                    {entrega && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: #000;">O GotaVita auxilia na entrega dos pedidos em um prazo médio de 7 dias úteis para o Sul e Sudeste. Para as demais regiões do país, o tempo estimado de entrega é de 10 dias úteis, geralmente sendo concluída antes desse período. O prazo de entrega tem início após a confirmação do pagamento realizado pela administradora do seu cartão de crédito ou após a confirmação do pagamento do boleto."</p>
                    ` }} />
                    )}
                </section>

                <section className={style.duvidas} onClick={toggleUsar}>
                    <h3 className={style.duvidas__titulo}>Como usar o GotaVita?</h3>
                    {usar && (
                        <div className={style.duvidas__textos} dangerouslySetInnerHTML={{
                            __html: `
                    <p><span style="color: rgb(68, 68, 68);">Basta escolher o kit que mais combina com você. GotaVita pode ser pago a vista, no Pix, através de boleto bancário, ou através de cartão de crédito parcelado em até 12x. O kit de 10 potes pode ser parcelado em 3x sem juros."</p>
                    ` }} />
                    )}
                </section>
            </section>
        </main>
  )
}
