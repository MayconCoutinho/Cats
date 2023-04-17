import styles from '../../sass/Imagens.module.scss'

export const ImagensGrid = ({ imagem }) => {
    const MonstraImg = () => {
        const img = imagem.map(item => {

            return item.map((item) => {
                return (
                    <figure className={styles.figure} >
                        <img alt='' className={styles.imagem} src={item} />
                    </figure>
                )
            })
        }
        )
        return img
    }
    return (
        imagem.length <= 0 ? <h1> Esperando imagens </h1> :

            <div className={styles.container}>
                <MonstraImg />
            </div>
    )

}
