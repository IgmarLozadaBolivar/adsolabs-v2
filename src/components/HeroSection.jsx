import Heading from '@components/Heading';
import JSLeft from '@assets/js-left.svg';
import VSCodeRight from '@assets/vscode-right.svg';
import styles from "@styles/HeroSection.module.css";
import { motion } from "framer-motion";

function HeroSection() {
    return (
        <>
            {/* HERO SECTION */}
            <div className = { styles.container }>

                {/* HEADING */}
                <div className = { styles.heading }>

                    {/* HEADING LAUNCHING */}
                    <div className = { styles.headingLaunching } >
                        <motion.div
                            initial = { { y : -100, opacity : 0 } }
                            animate = { { y : 0, opacity : 1 } }
                            transition = { { duration : 1, ease : "easeIn" } } >
                            <Heading level = { 6 } text = { "LAUNCHING 2025" } />
                        </motion.div>
                    </div>

                    {/* HEADING TITLE */}
                    <div className = { styles.headingTitle }>

                        {/* TITLE 1 */}
                        <motion.div
                            initial = { { y : -100, opacity : 0 } }
                            animate = { { y : 0, opacity : 1 } }
                            transition = { { duration : 1, ease : "easeIn" } } >
                            <Heading level = { 1 } text = { "Adso" } />
                        </motion.div>

                        {/* TITLE 2 */}
                        <motion.div
                            initial = { { y : 200, opacity : 0 } }
                            animate = { { y : 0, opacity : 1 } }
                            transition = { { duration : 1, ease : "easeIn" } } >
                            <Heading level = { 1 } text = { "Labs" } />
                        </motion.div>
                    </div>
                </div>

                {/* ICONS */}
                <div className = { styles.icons } >

                    {/* ICON LEFT */}
                    <motion.div
                    initial = { { y : -0, opacity : 0 } }
                    animate = { { y : -160, opacity : 1 } }
                    transition = { { duration : 1, ease : "easeIn", delay : 0.2 } } >
                        <img className = { styles.jsLeftIcon } src = { JSLeft } alt = "Icon JavaScript" />
                    </motion.div>

                    {/* ICON RIGHT */}
                    <motion.div
                        initial = { { y : -0, opacity : 0 } }
                        animate = { { y : -160, opacity : 1 } }
                        transition = { { duration : 1, ease : "easeIn", delay : 0.2 } } >
                        <img className = { styles.vsCodeRightIcon } src = { VSCodeRight } alt = "Icon VS Code" />
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default HeroSection

