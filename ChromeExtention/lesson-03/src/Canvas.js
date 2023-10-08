import React, { useEffect, useRef, useState, useCallback } from "react";
import MenuBar from "./MenuBar";

const Canvas = () => {
  const [ctx, setCtx] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(1);
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    setCtx(ctx);
  }, [lineWidth]);

  /* useEffect(() => {
    ctx.lineWidth = lineWidth;
    setCtx(ctx);
    return () => {
      console.log("Unmounting");
    };
  }, [lineWidth]); */

  const draw = (event) => {
    if (!drawing) return;
    ctx.lineTo(
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop
    );
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(
      event.clientX - canvasRef.current.offsetLeft,
      event.clientY - canvasRef.current.offsetTop
    );

    setCtx((prev) => ctx);
  };

  return (
    <div className="canvas_wrapper">
      <MenuBar onMarkerWidthChange={setLineWidth} />
      <canvas
        id="canvas"
        ref={canvasRef}
        onMouseDown={() => setDrawing(true)}
        onMouseUp={() => {
          setDrawing(false);
          ctx.beginPath();
        }}
        onMouseMove={(e) => draw(e)}
      />
    </div>
  );
};

export default Canvas;
