import React from "react";
import { Modal as ModalComponent } from "antd";
import { useModalContext } from "./ModalContext";

const Modal = () => {
  const {
    modalState: { inner, visible },
    closeModal,
  } = useModalContext();
  return (
    <div>
      <ModalComponent onOk={closeModal} onCancel={closeModal} visible={visible}>
        {inner}
      </ModalComponent>
    </div>
  );
};

export default Modal;
