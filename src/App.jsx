import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Button from "./components/Button"
import Modal from "./components/Modal"
import ScrollElement from "./components/ScrollElement";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  let scrollElementCount = 14;

  function closeModal() {
    setModalOpen(false);
  }
  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <Modal text="This is a modal animated with Framer Motion" closeModal={closeModal} />}
      </AnimatePresence>
      <header>
        <h1>Framer Motion Animations</h1>
      </header>
      <div>
        <section>
          <h4>Animated Button</h4>
          <div>Move your mouse over the button to see the effect</div>
          <Button text="Hover Me" />
        </section>
        <section>
          <h4>Animated Modals</h4>
          <div>Click on a Modal to see the effect</div>
          <button onClick={() => setModalOpen(true)}>Show Modal</button>
        </section>
        <section>
          <h4>Animating on Scroll</h4>
          <div>Scroll down to see elements animate elegantly as they scroll into view.</div>
          {[...Array(scrollElementCount)].map((x, i) => <ScrollElement key={i} />)}
        </section>
      </div>
    </>
  )
}

export default App

