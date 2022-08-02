import { motion } from "framer-motion";
import styled from "styled-components";
import React, { useRef } from "react";

const BoxAnimation = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "50%", backgroundColor: "#8fd3f4" },
};

const Background = styled.div`
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

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  const biggerBoxRef = useRef(null);

  return (
    <Background>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.3}
          dragConstraints={biggerBoxRef}
          whileHover="hover"
          whileTap="click"
          variants={BoxAnimation}
        ></Box>
      </BiggerBox>
    </Background>
  );
}

export default App;
