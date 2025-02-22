import styles from '@styles/Navbar.module.css';
import NavItem from '@components/NavItem';
import ListItem from "@components/ListItem";
import Anchor from "@components/Anchor";

function Navbar() {
    return (
        <>
            <nav className = { styles.navbar } >
                <NavItem>
                    <ListItem isActive >
                        <Anchor href = "#" text = { "Inicio" } />
                    </ListItem>
                    <ListItem>
                        <Anchor href = "#" text = { "Explorar" } />
                    </ListItem>
                    <ListItem>
                        <Anchor href = "#" text = { "Comunidad" } />
                    </ListItem>
                    <ListItem>
                        <Anchor href = "#" text = { "Soporte" } />
                    </ListItem>
                </NavItem>
            </nav>
        </>
    )
}

export default Navbar;