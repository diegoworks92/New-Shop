"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import "./style.css";

interface Position {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState<boolean>(false);
  const followerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const lastPosition = useRef<Position>({ x: 0, y: 0 });
  /* 
  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    const target = e.target as HTMLElement;
    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
  };
 */
  const handleMouseMove = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target instanceof Element) {
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
      );
    }
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const animateFollower = useCallback(() => {
    if (followerRef.current) {
      const follower = followerRef.current;
      const dx = position.x - lastPosition.current.x;
      const dy = position.y - lastPosition.current.y;
      lastPosition.current.x += dx * 0.2;
      lastPosition.current.y += dy * 0.2;
      follower.style.left = `${lastPosition.current.x}px`;
      follower.style.top = `${lastPosition.current.y}px`;
    }
    requestRef.current = requestAnimationFrame(animateFollower);
  }, [position]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animateFollower);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animateFollower]);

  const cursorStyle = isPointer ? { opacity: 0.5 } : {};

  return (
    <>
      <div
        ref={followerRef}
        className={`flare ${isPointer ? "pointer" : ""}`}
        style={{
          ...cursorStyle,
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "12px",
          height: "12px",
          border: "2px solid #ffffff2b",
          borderRadius: "50%",
          mixBlendMode: "screen",
          backdropFilter: "blur(1px)",
          backgroundColor: "#580187",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 999998,
        }}
      ></div>
      <div
        ref={followerRef}
        className={`flare ${isPointer ? "pointer" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "30px",
          height: "30px",
          border: "2px solid #580187",
          borderRadius: "50%",
          mixBlendMode: "screen",
          backdropFilter: "blur(1px)",
          backgroundColor: "transparent",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 999999,
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
