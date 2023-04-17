import styles from './header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header_bar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src='/assets/img/logo/logo.png' />
                </div>
                <nav className={styles.menu}>
                    <ul>
                        <li><a id={styles.a_home} href="#"> Home </a></li>
                        <li><a id={styles.a_create} href="#">Create <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><g transform="rotate(-90 12 12)"><path fill="black" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z" /></g></svg>
                        </a></li>
                    </ul>
                </nav>
                <div className={styles.search}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#777" d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68Z" /></svg>
                    <input type="text" placeholder='Search' />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </div>
                <nav className={styles.menu}>
                    <ul>
                        <li><a href="#">
                            <div key={"circulo cinza"} id={styles.circulo_cinza}>
                                <svg key={"notificar"} id={styles.svg_notification} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#777" d="M21 6.5c0 1.93-1.57 3.5-3.5 3.5S14 8.43 14 6.5S15.57 3 17.5 3S21 4.57 21 6.5m-2 5.29c-.5.13-1 .21-1.5.21A5.51 5.51 0 0 1 12 6.5c0-1.47.58-2.8 1.5-3.79A1.93 1.93 0 0 0 12 2c-1.1 0-2 .9-2 2v.29C7.03 5.17 5 7.9 5 11v6l-2 2v1h18v-1l-2-2v-5.21M12 23c1.11 0 2-.89 2-2h-4a2 2 0 0 0 2 2Z" /></svg>
                                <div id={styles.circulo}> 10 </div>
                            </div>
                        </a></li>
                        <li><a href="#">
                            <div key={"circulo cinza"} id={styles.circulo_cinza}>
                                <svg id={styles.svg_menssage} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#777" stroke="#777" stroke-linecap="round" stroke-linejoin="round" d="m43.51 36.19l-.55-2A21.5 21.5 0 1 0 34.14 43l2 .55l7.2 1.93a1.67 1.67 0 0 0 2-1.18a1.61 1.61 0 0 0 0-.87Zm-10-14.39a2.2 2.2 0 1 1-2.2 2.2a2.23 2.23 0 0 1 2.22-2.2Zm-19.04 4.4a2.2 2.2 0 1 1 2.2-2.2a2.23 2.23 0 0 1-2.2 2.2Zm9.53 0a2.2 2.2 0 1 1 2.2-2.2a2.23 2.23 0 0 1-2.2 2.2Z" /></svg>
                            </div>
                        </a></li>
                        <li><a href="#">
                            <div key={"circulo cinza"} id={styles.circulo_cinza}>
                                <img  src='/assets/img/perfil/perfil.jpg'/>
                            </div>
                        </a></li>

                        <svg id={styles.svg_seta} xmlns="http://www.w3.org/2000/svg" width="20" height="20"  viewBox="0 0 24 24"><g transform="rotate(-90 12 12)"><path fill="#777" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z" /></g></svg>
                    </ul>
                </nav>
            </div>
        </header>
    )
}