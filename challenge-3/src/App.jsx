import { useState } from 'react';
import styles from './App.module.css';

import Button from './components/UI/Button';
import Modal from './components/Modal/Modal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModalhandler = () => {
    setModalIsOpen(false);
  };

  const openModalhandler = () => {
    setModalIsOpen(true);
  };
  return (
    <>
      <p className={styles.description}>
        Pop me up like one of your bubble wraps.
      </p>
      <Button onClick={openModalhandler}>pop it!</Button>
      {modalIsOpen && (
        <Modal onClose={closeModalhandler}>
          <p className={styles.description}>
            Wow, bouncy! Now, let’s wrap it up and close me back.
          </p>
          <Button onClick={closeModalhandler}>Let's close</Button>
        </Modal>
      )}
    </>
  );
}

export default App;
