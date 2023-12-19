import React from 'react'
import style from './secaofabricacao.module.css'

export default function SecaoFabricacao() {
  return (
    <main className={style.conteudo__secao__fabricacao}>
        <h3 className={style.titulo__secao__fabricacao}>Conheça o Processo de <strong style={{color: '#ff5300'}}>Fabricação</strong> do <strong style={{color: '#006e05'}}>GotaVita!</strong></h3>
        <iframe src="https://scripts.converteai.net/e7519c36-4878-4434-9937-c67818f3be86/players/64e906537b941e0009cb6664/embed.html" title='Vídeo Fabricação' frameborder="0" className={style.video__secao__fabricacao}></iframe>
    </main>
  )
}
