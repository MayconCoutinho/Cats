import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from "axios"
import styles from '../sass/Imagens.module.scss'
import { Header } from '../components/header'

export default function Home() {
    const [img, setImg] = useState(0)
    const [gatos, setGatos] = useState([])

    const pegandoImg = () => {
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=25`)
            .then((res) => {
                setImg(res.data)
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
                return ( <img key={item} alt='' className={styles.imagem} src={item} />)
            })
        )
    }
    return (
        <div >
            <Head>
                <title> Scroll infinito </title>
                <meta name=" Scroll infinito" content=" Scroll infinitoI" />
            </Head>

            <Header />



            <div className={styles.container}>
                {
                    img > 0 ? <h1> sem esperando imagens </h1> : monstraImg()
                }
            </div>

            <li id='sentinela' className={styles.sentinela} />
        </div>
    )
}
