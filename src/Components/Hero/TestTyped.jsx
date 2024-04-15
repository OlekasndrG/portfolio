import React from "react";
import Typed from "typed.js";
import styles from "./TestTyped.module.css";
export function TypedText() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["  JUNIOR FULL STACK / FRONT-END DEVELOPER"],
      typeSpeed: 50,
      startDelay: 2500,
      loop: false,
      backSpeed: 0,
      showCursor: true,
      onComplete: (self) => {
        self.cursor.classList.add("fade");
      },
    });
  
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <span ref={el} className={styles.spanContainer} />;
}
