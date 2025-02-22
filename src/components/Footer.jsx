import styles from '@styles/Footer.module.css';
import Logo from '@components/Logo';
import Heading from '@components/Heading';
import Paragraph from "@components/Paragraph";
import NavItem from "@/components/NavItem";
import ListItem from "@components/ListItem";
import { Github, Figma, Linkedin } from "iconoir-react";

function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles['footer-container-primary']} >
                    <div className={styles['footer-branding']}>
                        <Logo />
                        <Heading level = { 3 } text = "ADSOLABS COMMUNITY" />
                        <Paragraph text = '"Simplicity is the soul of efficiency"' />
                        <Paragraph text = "- Austin Freeman" />
                    </div>
                    <div className={styles['footer-links-container']}>
                        <div className={styles['footer-sections']}>
                            <Heading level = { 4 } text = "SECCIONES" />
                            <Paragraph text = "Inicio" />
                            <Paragraph text = "Explorar" />
                            <Paragraph text = "Comunidad" />
                            <Paragraph text = "Soporte" />
                            <Paragraph text = "FAQs" />
                        </div>
                        <div className={styles['footer-stacks']}>
                            <Heading level = { 4 } text = "STACKS" />
                            <Paragraph text = "Programación" />
                            <Paragraph text = "Diseño" />
                            <Paragraph text = "Fullstack" />
                        </div>
                        <div className={styles['footer-legal']}>
                            <Heading level = { 4 } text = "LEGAL" />
                            <Paragraph text = "Terms of Service" />
                            <Paragraph text = "Privacy Policy" />
                            <Paragraph text = "Cookies Policy" />
                            <Paragraph text = "Data Processing" />
                        </div>
                    </div>
                </div>

                <hr />
                <div className = { styles ['footer-copyright'] } >
                    <Paragraph text = "&#169; Copyright 2025 Todos los derechos reservados por la Comunidad de ADSO" />
                    <NavItem>
                        <ListItem>
                            <Github />
                        </ListItem>
                        <ListItem>
                            <Figma />
                        </ListItem>
                        <ListItem>
                            <Linkedin />
                        </ListItem>
                    </NavItem>
                </div>
            </footer>
        </>
    )
}

export default Footer;