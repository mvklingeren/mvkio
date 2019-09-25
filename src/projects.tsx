import { useRef, useState } from "react";
import Project from "./project";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// eslint-disable-next-line
import React, { ReactElement } from "react";
import anime from "animejs";
import Transition from "react-transition-group/Transition";
import TransitionGroup from "react-transition-group/TransitionGroup";

const createOpacityAnimationConfig = (animatingIn: any): any => ({
  value: animatingIn ? [0, 1] : 0,
  easing: "linear",
  duration: 2500
});

const animateGridIn = (gridContainer: HTMLElement): any =>
  anime.timeline().add({
    targets: gridContainer.querySelectorAll(".card"),
    translateY: [1000, 0],
    delay: anime.stagger(100),
    opacity: createOpacityAnimationConfig(true)
  });

const ProjectsGrid = ({
  items,
  visible
}: {
  items: any;
  visible: boolean;
}): ReactElement => {
  const transitionKey = useRef(1);
  const [prevVisible, setPrevVisible] = useState(visible);
  if (visible !== prevVisible) setPrevVisible(visible);
  if (visible && !prevVisible) {
    transitionKey.current += 1;
  }

  return (
    <Transition
      unmountOnExit
      appear
      onEnter={animateGridIn}
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

export default ProjectsGrid;
