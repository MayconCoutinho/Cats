import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from "axios"
import styles from './Imagens.module.scss'

export default function Home() {
  const [img, setImg] = useState(0)
  const [gatos, setGatos] = useState([])

  const pegandoImg = () => {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=25`)
      .then((res) => {
        setImg(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(() => {
      pegandoImg()
    })
    intersectionObserver.observe(document.querySelector('#sentinela'))
    return () => intersectionObserver.disconnect()
  }, [])

  useEffect(() => {
    if (img.length > 0) {
      img.map((item) => {
        setGatos(gatos => [...gatos, ...[item.url]])
      })
    }
  }, [img])

  const monstraImg = () => {
    return (
      gatos.map((item, index) => {
        return (
          <div key={item} className={styles.container}>
            <img key={item} alt='' className={styles.imagem} src={item} />
          </div>)
      })
    )
  }
  return (
    <div >
      <Head>
        <title> Scroll infinito </title>
        <meta name=" Scroll infinito" content=" Scroll infinitoI" />
      </Head>

      <div className={styles.alinha}>
        <h1> Api de Gatinhos com Scroll infinito </h1>
        <img alt='' src='https://cdn2.thecatapi.com/logos/thecatapi_256xW.png' width={200} />
        <p> Ou até acabas as imagens da api 😅 </p>
        <p> Caso queira ver mais projetos meus de uma olhada em minhas redes </p>
        <a href='https://www.linkedin.com/in/maycon-coutinho/' target='_blank' rel="noreferrer" > Linkedin </a>
        <a href='https://github.com/MayconCoutinho' target='_blank' rel="noreferrer"> GitHub </a>
        <h1> Se divirta vendo os Gatinho é bem legal essa Api :) </h1>
      </div>
      {
        img > 0 ? <h1> sem esperando imagens </h1> : monstraImg()
      }
      <li id='sentinela' className={styles.sentinela} />
    </div>
  )
}
