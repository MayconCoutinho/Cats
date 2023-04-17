import { useContext, useEffect } from 'react'
import styles from '../sass/Imagens.module.scss'
import { Header } from '../components/header'
import { GlobalContext } from '../context'
import { ImagensGrid } from '../components/imagensGrid'
import { InfoHead } from '../components/infoHead'

export default function Home() {
    const { gatos, atualizar } = useContext(GlobalContext)

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(() => {
            atualizar()
        })

        intersectionObserver.observe(document.querySelector('#sentinela'))
        return () => intersectionObserver.disconnect()
    }, [])

    return (
        <>
            <InfoHead title={"Pinterest"} meta_content={"Pinterest"} meta_name={"Pinterest"}/>

            <Header />

            <ImagensGrid imagem={gatos} />

            <li id='sentinela' className={styles.sentinela} />
        </>
    )
}
