import { createContext, useContext } from "react";
import { useState } from "react";

//createContext
const ModalContext = createContext({});

//Provider설정
const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({ visible: false });

  const openModal = (payload) => setModalState({ ...payload, visible: true });
  const closeModal = () => setModalState({ visible: false });

  return (
    <ModalContext.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

//hooks
const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export { useModalContext, ModalProvider };
