import { useNavigate, Link } from "react-router-dom";
import styles from "./Modal.module.css";

function Modal(props) {
  // const navigate = useNavigate();
  // function closeHandler() {
  //   navigate('..');
  // }

  return (
    <>
      <Link
        className={styles.backdrop}
        to=".."
        // onClick={closeHandler}
      />
      <dialog open className={styles.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
