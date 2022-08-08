import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import { ModalProvider } from "./ModalContext";
import HomePage from "./HomePage";
import Modal from "./Modal";

function App() {
  return (
    <>
      <ModalProvider>
        <HomePage />
        <Modal />
      </ModalProvider>
    </>
  );
}

export default App;
