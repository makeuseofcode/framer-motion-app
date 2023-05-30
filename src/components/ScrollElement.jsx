import { motion } from "framer-motion"

export default function ScrollElement() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 14 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className='scroll-element'
        >
            Scroll Element
        </motion.div>
    )
}