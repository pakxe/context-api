import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";

const BoxAnimation = {
  start: { scale: 0, opacity: 0.5 }, // initial stage
  end: {
    scale: 1,
    opacity: 1,
    rotateZ: 360,
    transition: {
      delay: 1,
      duration: 3.5,
      type: "spring",
      stiffness: 130,
      delayChildren: 3,
      staggerChildren: 0.5,
    },
  }, // finishing stage
};

const InnerAnimation = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 1, y: 0 },
};
const Inner = styled(motion.div)`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.1);
`;

const Background = styled.div`
  background: linear-gradient(45deg, #fbc2eb, #a6c1ee);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 200px;
  width: 200px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 2px 5px 3px rgba(0, 0, 0, 0.1);
`;
function App() {
  return (
    <Background>
      <Box initial="start" animate="end" variants={BoxAnimation}>
        <Inner variants={InnerAnimation}></Inner>
        <Inner variants={InnerAnimation}></Inner>
        <Inner variants={InnerAnimation}></Inner>
        <Inner variants={InnerAnimation}></Inner>
      </Box>
    </Background>
  );
}

export default App;
