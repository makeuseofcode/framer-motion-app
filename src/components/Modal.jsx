import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
export default function Modal({ closeModal, text }) {

    const variants = {
        initial: {
            y: "-200%",
            opacity: 1,
        },
        visible: {
            y: "50%",
            transition: {
                duration: 0.1,
                type: "spring",
                damping: 32,
                stiffness: 500
            }
        },
        exit: {
            y: "200%",
        }
    }
    return (
        <Backdrop onClick={closeModal}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={variants}
                initial='initial'
                animate='visible'
                exit='exit'
            >
                {text}
            </motion.div>
        </Backdrop>

    )
}