import FooterDevelopedBy from "./components/FooterDevelopedBy";
import FooterInfo from "./components/FooterInfo";
import FooterInstitucional from "./components/FooterInstitucional";
import FooterLogo from "./components/FooterLogo";
import FooterSocial from "./components/FooterSocial";
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer className={styles.rodape}>
                <div className={styles.rodape_informacoes}>
                    <FooterLogo />
                    <FooterInfo />
                    <FooterInstitucional/>
                    <FooterSocial/>
                </div>
            </footer>

            <FooterDevelopedBy/>
        </>
    );
}

export default Footer;