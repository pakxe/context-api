import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import React, { useRef, useEffect } from "react";

const BoxAnimation = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "50%", backgroundColor: "#8fd3f4" },
};

const Background = styled(motion.div)`
  background: linear-gradient(45deg, #84fab0, #8fd3f4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  height: 200px;
  width: 200px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.1);
`;

function App() {
  const x = useMotionValue(0);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(45deg, #ff9a9e, #fad0c4)",
      "linear-gradient(45deg, #84fab0, #8fd3f4)",
      "linear-gradient(45deg, #a18cd1, #fbc2eb)",
    ]
  );

  return (
    <Background style={{ background: gradient }}>
      <Box drag="x" style={{ x }} dragSnapToOrigin></Box>
    </Background>
  );
}

export default App;
