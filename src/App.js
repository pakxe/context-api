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
  background: linear-gradient(45deg, #84fab0, #8fd3f4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ingredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
];

const [tomato, lettuce, cheese] = ingredients;
const tabs = [tomato, lettuce, cheese];

function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <Background>
      <div className="window">
        <nav>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.label}
                className={item === selectedTab ? "selected" : ""}
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.icon : "🥨"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </Background>
  );
}

export default App;
