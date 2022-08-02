import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const Background = styled(motion.div)`
  background: linear-gradient(45deg, #84fab0, #8fd3f4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
`;
function App() {
  const [showing, setShowing] = useState(false);
  const toggleHandler = () => {
    setShowing(!showing);
  };

  return (
    <Background>
      <button onClick={toggleHandler}>Click me</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Background>
  );
}

const boxVariants = {
  initial: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
  leaving: { opacity: 0, scale: 0, y: 50 },
};

export default App;
