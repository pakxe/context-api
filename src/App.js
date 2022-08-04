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
  height: 200px;
  border-radius: 20px;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.2);
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70vw;

  grid-gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
//grid-column: span 2 => 해당하는 요소는 열의 2개만큼의 공간을 차지하라는 뜻

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  const [clickedId, setClickedId] = useState(null);

  return (
    <Background>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box key={n} layoutId={n} onClick={() => setClickedId(n)}></Box>
        ))}
      </Grid>
      <AnimatePresence>
        {clickedId ? (
          <Overlay
            onClick={() => {
              setClickedId(null);
            }}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, .5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box
              layoutId={clickedId}
              style={{
                width: 400,
                height: 200,
                backgroundColor: "rgb(0, 208, 162)",
              }}
            ></Box>
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Background>
  );
}

export default App;
