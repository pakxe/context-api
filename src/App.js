import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import HomePage from "./home.page";
import Modal from "./modal.component";
import { ModalProvider } from "./modal.context";
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
