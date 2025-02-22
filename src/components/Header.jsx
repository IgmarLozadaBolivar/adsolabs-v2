import styles from "@styles/Header.module.css";
import Logo from "@components/Logo";
import Navbar from '@components/Navbar';
import Button from '@components/Button';
import Aurora from "@components/Back_Aurora";

function Header() {
    return (
        <>
            {/* AURORA - BACKGROUND - REACT BITS */}
            {/*<div className = { styles.auroraWrapper } >
                <Aurora
                    className = { styles.auroraHeader }
                    colorStops = { [ "#ff00ff", "#00ffff", "#ff9900" ] }
                    amplitude = { 1 }
                    blend = { 1 } />
            </div>*/}
            <header className = { styles.header } >
                {/* LOGO */}
                <div className = { styles.logo } >
                    <Logo />
                </div>

                {/* NAVEGACION */}
                <Navbar />

                {/* BOTON / ACCION */}
                <div className = { styles.buttonsCTA } >
                    <Button text = { "Campus" } variant = "toCampusButton" >
                        {/*<NavArrowRight />*/}
                    </Button>
                </div>
            </header>
        </>
    )
}

export default Header;