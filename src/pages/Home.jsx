import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <div className="gradient-bg" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative min-h-screen flex flex-col"
            >
                <main className="flex-1">
                    <Hero />
                    <Features />
                </main>
                <Footer />
            </motion.div>
        </>
    )
}

export default Home
