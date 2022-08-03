import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
const Background = styled(motion.div)`
  background: linear-gradient(45deg, #ed6ea0, #ec8c69);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.2);
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  height: 40px;
  width: 40px;
  background: #9face6;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.1);
`;
function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <Background onClick={() => setClicked(!clicked)}>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 0 }}></Circle>
        ) : null}
      </Box>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: 50 }}></Circle>
        ) : null}
      </Box>
    </Background>
  );
}

export default App;
