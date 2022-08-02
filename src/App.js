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
  background: linear-gradient(45deg, #df89b5, #bfd9fe);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false); // 슬라이드가 뒤로가는지 확인하는 state
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  const boxVariants = {
    // 인수인 isBack은 Box의 custom={back}으로 받은 값임.
    entry: (isBack) => {
      return { opacity: 0.2, scale: 0.5, x: isBack ? -500 : 500 };
    },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.3 } },
    exit: (isBack) => {
      return {
        opacity: 0.2,
        scale: 0.5,
        x: isBack ? 500 : -500,
        transition: { duration: 0.3 },
      };
    },
  };
  return (
    <Background>
      {/* 
        AnimatePresence에도 custom 작성,
        exitBeforeEnter : 전 요소의 animation이 완전히 끝난 후 다음 animation이 작동 함. ex) <AnimatePresence exitBeforeEnter custom={back},
        onExitComplete: exit가 끝날 때 실행. >
      */}
      <AnimatePresence onExitComplete custom={back}>
        <Box
          custom={back} // back에 따라 boxVariants가 달라짐.
          key={visible} // React js의 children은 각 고유의 key가 필요하기 때문에 key값이 변하면 다른 요소로 변함.
          variants={boxVariants}
          initial="entry"
          animate="visible"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease} style={{ fontSize: "30px" }}>
        next
      </button>
      <button onClick={prevPlease} style={{ fontSize: "30px" }}>
        prev
      </button>
    </Background>
  );
}
export default App;
