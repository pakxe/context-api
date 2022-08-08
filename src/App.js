import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import HomePage from "./home.page";
import Modal from "./modal.component";
import { ModalProvider2 } from "./ModalContext2";

function App() {
  return (
    <>
      <ModalProvider2>
        <HomePage />
        <Modal />
      </ModalProvider2>
    </>
  );
}

export default App;
