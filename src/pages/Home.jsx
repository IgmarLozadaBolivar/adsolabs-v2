import MainLayout from '@layouts/MainLayout';
import HeroSection from "@components/HeroSection";
import {motion} from "framer-motion";

function Home() {
    return (
        <motion.div
            initial={{y: -100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 1, ease: "easeIn"}}>
            <MainLayout>
                <HeroSection/>
            </MainLayout>
        </motion.div>
    )
}

export default Home;