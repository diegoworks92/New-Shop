"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "#721c24",
        }}
      >
        :(
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#721c24",
        }}
      >
        An error has occurred
      </p>
      <button
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          color: "#fff",
          backgroundColor: "#d9534f",
          border: "1px solid #d9534f",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Try again
      </button>
    </div>
  );
}
