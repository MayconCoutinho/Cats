import Image from "next/image";
import styles from "../../sass/Imagens.module.scss";

export const ImagensGrid = ({ imagem }) => {
    const MonstraImg = () => {
        const img = imagem.map((item) => {
            return item.map((item) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <figure className={styles.figure}>
                        <Image
                            alt=""
                            className={styles.imagem}
                            src={item}
                            width="100%"
                            height="100%"
                            layout="responsive"
                        />
                    </figure>
                );
            });
        });
        return img;
    };
    return imagem.length <= 0 ? (
        <h1> Esperando imagens </h1>
    ) : (
        <div className={styles.container}>
            <MonstraImg />
        </div>
    );
};
