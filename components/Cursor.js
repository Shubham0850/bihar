import { useEffect, useRef } from "react";

export default function Cursor() {
  const currentRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - currentRef.current.clientWidth / 2;
      const mouseY = clientY - currentRef.current.clientHeight / 2;
      currentRef.current.style.transform = `translate3D(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return <div id="cursor" ref={currentRef} />;
}
