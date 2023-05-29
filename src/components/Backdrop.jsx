import { motion } from "framer-motion"
export default function Backdrop({ onClick, children }) {

    return (<>
        <motion.div
            onClick={onClick}
            className="backdrop"
            initial={{ opacity: 0, backdropFilter:"blur(0px)" }}
            animate={{ opacity: 1, backdropFilter:"blur(3.4px)" }}
            exit={{ opacity: 0, backdropFilter:"blur(0px)"}}
            transition={{
                duration: 0.34,
            }}
        >
            {children}
        </motion.div>
    </>)
}