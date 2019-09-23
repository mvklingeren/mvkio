import React, { useRef, useState } from "react";
import Project from "./project";
/** @jsx jsx */ import { jsx, css } from "@emotion/core";

import anime from "animejs";
import Transition from "react-transition-group/Transition";
import TransitionGroup from "react-transition-group/TransitionGroup";

// we will trigger an event on the grid node after the exit animation completes
// to let the transitiongroup know that it can be removed from the DOM
// this is the only way to let react-transition-group delegate timing
// to the JavaScript animation
const ANIMATION_DONE_EVENT = "animation::done";
const triggerAnimationDoneEvent = (node: any) =>
  node.dispatchEvent(new Event(ANIMATION_DONE_EVENT));

const createOpacityAnimationConfig = (animatingIn: any) => ({
  value: animatingIn ? [0, 1] : 0,
  easing: "linear",
  duration: 2500
});

const easing = "spring(1, 130, 10)";

const animateGridIn = (gridContainer: HTMLElement) =>
  anime.timeline().add({
    targets: gridContainer.querySelectorAll(".card"),
    translateY: [1000, 0],
    delay: anime.stagger(100),
    opacity: createOpacityAnimationConfig(true)
  });
// .add({
//   targets: gridContainer,
//   translateX: [-1000, 0],
//   opacity: createOpacityAnimationConfig(true),
//   easing
// })
// .add(
//   {
//     targets: gridContainer.querySelectorAll(".card"),
//     easing,
//     opacity: createOpacityAnimationConfig(true),
//     translateY: [-30, 0],
//     complete: () => triggerAnimationDoneEvent(gridContainer),
//     delay: anime.stagger(70)
//   },
//   "-=500"
// );

const ProjectsGrid = ({ items, visible }: any) => {
  // the code below makes sure we force re-mount the transition component
  // every time it enters, to avoid the transition caching old state
  // if someone rapidly toggles the component in and out
  const transitionKey = useRef(1);
  const [prevVisible, setPrevVisible] = useState(visible);
  if (visible !== prevVisible) setPrevVisible(visible);
  if (visible && !prevVisible) {
    transitionKey.current += 1;
  }

  console.log("rendering grid");
  return (
    <Transition
      unmountOnExit
      appear
      //addEndListener={addEndListener}
      onEnter={animateGridIn}
      //onExit={animateGridOut}
      in={visible}
      key={transitionKey.current}
      timeout={3}
    >
      <div
        className="grid animated-grid"
        css={css`
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
        `}
      >
        <TransitionGroup component={null}>
          {items.map((item: any, index: number) => (
            <Transition key={item} timeout={3}>
              <Project
                key={index}
                name="'holy grail' React template with emotion"
                url="https://www.github.com/mvkdev"
              />
            </Transition>
          ))}
        </TransitionGroup>
      </div>
    </Transition>
  );
};

// const Projects: React.FC = () => {

//   return (
//     <div
//       css={css`
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: start;
//       `}
//     >
//       <Project
//         key={0}
//         name="'holy grail' React template with emotion"
//         url="https://www.github.com/mvkdev"
//       />
//       <Project
//         key={1}
//         name="React FC generator VSCode extension"
//         url="https://www.github.com/mvkdev"
//       />
//       <Project
//         key={0}
//         name="Ambient light sensor emulation"
//         url="https://www.github.com/mvkdev"
//       />
//     </div>
//   );
// };

export default ProjectsGrid;
