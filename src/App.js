import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";

const Background = styled(motion.div)`
  background: linear-gradient(45deg, #2af598, #009efd);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Parent = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  &[data-isOpen="true"] {
    width: 400px;
    height: 200px;
  }
`;

const Child = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: #f107a3;
  border-radius: 50%;
`;
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Background>
      <Parent
        layout
        data-isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ borderRadius: 50 }}
      >
        <Child layout />
      </Parent>
    </Background>
  );
}

export default App;
