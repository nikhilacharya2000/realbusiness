import React from 'react';
import Typed from 'typed.js';

function TypedScript() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Actors !","Actress !","Sports Man!","Chef !","TV Star !"],
      startDelay:100,
      typeSpeed: 100,
      backSpeed:100,
      smartBackspace:true,
      showCursor:false,
      loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
     <p>The Biggest Fan Club of Indian <span ref={el} /></p> 
    </div>
  );
}
export default TypedScript;