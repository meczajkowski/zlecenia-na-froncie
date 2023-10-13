import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div onClick={props.onClose} className={styles.backdrop}>
      {props.children}
    </div>
  );
};
const ModalOverlay = (props) => {
  return <div className={styles.modal}>{props.children}</div>;
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}>
          <ModalOverlay>{props.children}</ModalOverlay>
        </Backdrop>,
        portalElement
      )}
    </>
  );
};

export default Modal;
