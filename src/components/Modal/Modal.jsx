import { Component } from "react";
import PropTypes from 'prop-types'
import { createPortal } from "react-dom";
import styles from "./modal.module.css";
const modalRoot = document.querySelector('#modal-root');
class Modal extends Component{
    static propTypes = {
        closeModal: PropTypes.func,
       
    }
      closeModal = ({target, currentTarget, code}) => {
        if(target === currentTarget || code === "Escape") {
            this.props.close()
        }
    }
    componentDidMount() {
        window.addEventListener("keydown", this.closeModal);
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.closeModal);
    }
    render() {
        const { children, close } = this.props;
         const {closeModal} = this;
        return (
            createPortal(
 <div className={styles.Overlay} onClick={closeModal}>
                <div className={styles.Modal}>
                    <span className={styles.close} onClick={close}>X</span>
                    {children}
            </div>
                </div>,
                modalRoot
            )
           
        )
    }
}
export default Modal;