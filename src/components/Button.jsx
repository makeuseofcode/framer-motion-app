export default function ({ text }) {
    return (
        <>
            <button
                whileHover={{ scale: 1.1, backgroundColor: "red" }}
            >
                {text}
            </button>
        </>
    )
}