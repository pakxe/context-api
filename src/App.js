import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";

const Background = styled(motion.div)`
  background: linear-gradient(45deg, #84fab0, #8fd3f4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Switch = styled(motion.div)`
  width: 160px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 10px;

  &[data-isOn="true"] {
    justify-content: flex-end;
  }
`;
//대괄호 안에 넣어준 것은 속성(특성) 선택자임

const Handle = styled(motion.div)`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background-color: white;
`;

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <Background>
      <Switch data-isOn={isOn} onClick={toggleSwitch}>
        <Handle layout transition={spring} />
      </Switch>
    </Background>
  );
}

const spring = {
  stiffness: 700,
  type: "spring",
  damping: 30,
};
export default App;
