import { motion } from "framer-motion"
export default function ({ text }) {
    return (
        <>
            <motion.button whileHover={{ scale: 1.1 }}>
                {text}
            </motion.button>
        </>
    )
}