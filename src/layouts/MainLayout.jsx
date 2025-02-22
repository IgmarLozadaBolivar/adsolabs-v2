import styles from '@styles/MainLayout.module.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import PropTypes from "prop-types";
import GridBackground from "@assets/grid.svg";
import { motion } from "framer-motion";

function MainLayout({children}) {
    return (
        <>
            <motion.div
                initial = { { y : -100, opacity : 0 } }
                animate = { { y : 0, opacity : 1 } }
                transition = { { duration : 1, ease : "easeIn" } } >
                <div className = { styles.backgroundWrapper } >
                    <img src = { GridBackground } alt = "Grid Background" />
                </div>
            </motion.div>
            <Header/>
            <main> {children} </main>
            {/*<Footer />*/}
        </>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

MainLayout.defaultProps = {
    children: null,
}

export default MainLayout;