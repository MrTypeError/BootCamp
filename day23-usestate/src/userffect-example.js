import React, { useEffect, useState } from "react";

function UseEffectExample() {
  console.log("Render");
  //   console.log("Re-Render");

  const [coursorPosition, setCoursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setCoursorPosition({ x: e.clientX, y: e.clientY });
      console.log("Pointer Move Event");
    };

    console.log("addEventListner added for Pointermove");

    window.addEventListener("pointermove", handleMove);

    //clean up Function
    return window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div>
      x:{coursorPosition.x}, y:{coursorPosition.y}
    </div>
  );
}

export default UseEffectExample;
