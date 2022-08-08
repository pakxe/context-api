import React from "react";
import { useModalContext } from "./ModalContext";

const HomePage = () => {
  const { openModal } = useModalContext();
  const onModal = () => openModal({ inner: "모달이 켜졌다!" });

  return (
    <div>
      <h1>im homePage.</h1>
      <button onClick={onModal}>Modal띄우기</button>
    </div>
  );
};

export default HomePage;
