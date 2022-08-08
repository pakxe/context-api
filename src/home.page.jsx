import React from "react";
import { Button } from "antd";
import { useModalContext2 } from "./ModalContext2";

const HomePage = () => {
  const { openModal } = useModalContext2();
  const innerModal = () => openModal({ inner: "text모달입니다." });
  return (
    <>
      <h1>home</h1>
      <Button onClick={innerModal} type="primary">
        모달 열기
      </Button>
    </>
  );
};

export default HomePage;
