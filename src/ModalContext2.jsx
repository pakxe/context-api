import { createContext, useContext, useState } from "react";

//createContext
const ModalContext2 = createContext({});

//Provider 설정
const ModalProvider2 = ({ children }) => {
  const [modalState, setModalState] = useState({ visible: false });

  const openModal = (payload) => setModalState({ ...payload, visible: true });
  const closeModal = () => setModalState({ visible: false });

  return (
    <ModalContext2.Provider value={{ modalState, openModal, closeModal }}>
      {children}
    </ModalContext2.Provider>
  );
};

//hook 설정

const useModalContext2 = () => {
  const context = useContext(ModalContext2);
  return context;
};

export { useModalContext2, ModalProvider2 };
