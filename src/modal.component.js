import React from "react";
import { Modal as ModalComponent } from "antd";
import { useModalContext } from "./modal.context";
import { useModalContext2 } from "./ModalContext2";

const Modal = () => {
  const {
    modalState: { inner, visible },
    closeModal,
  } = useModalContext2();

  return (
    <ModalComponent onCancel={closeModal} onOk={closeModal} visible={visible}>
      <p>{inner}</p>
    </ModalComponent>
  );
};

export default Modal;
