import React from "react";
import Title from "../common/title/Title";
import Paragraph from "../common/paragraph/Paragraph";
import Code from "../common/code/Code.common";
import SecondaryTitle from "../common/secondaryTitle/SecondaryTitle";

const AnimatedBlock = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Title>Animated Block</Title>
      <section>
        <Paragraph>
          Animated Node returned from{" "}
          <span className="highlight">useAnimatedValue()</span> hook is not
          directly read by <span className="highlight">HTMLElement</span>. It
          needs a special type of element that can read it. So, we have an{" "}
          <span className="highlight">{"<AnimatedBlock>"}</span> component which
          inherits all properties of the{" "}
          <span className="highlight">{"<div>"}</span> element and it can accept
          the animated nodes returned from{" "}
          <span className="highlight">useAnimatedValue()</span> hook.
        </Paragraph>
        <SecondaryTitle>Example</SecondaryTitle>
        <Code>
          {`
import { AnimatedBlock, useAnimatedValue } from "react-uicomp";

export default function() {
  const opacity = useAnimatedValue(0); // It initializes opacity object with value 0.

  return (
      <div>
          {/* AnimatedBlock component should be used with useAnimatedValue() */}
          <AnimatedBlock 
            style={{
              opacity: opacity.value, // value property should be passed
              width: 100,
              padding: 20,
              background: "#39F",
            }}
          >
            ANIMATED
          </AnimatedBlock>
          
          {/* Animating from 0 to 1 is very simple just assign opacity.value = 1 */}
          <button onClick={() => opacity.value = 1}>Animate Me</button>
      </div>
  );
}

       `}
        </Code>
      </section>
    </div>
  );
};

export default AnimatedBlock;
