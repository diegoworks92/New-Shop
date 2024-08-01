"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, []);

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
          color: "#721c24", // Color del título (puedes cambiarlo)
        }}
      >
        :(
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          color: "#721c24", // Color del texto (puedes cambiarlo)
        }}
      >
        Ha ocurrido un error
      </p>
      <button
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          color: "#fff", // Color del texto del botón (puedes cambiarlo)
          backgroundColor: "#d9534f", // Color de fondo del botón (puedes cambiarlo)
          border: "1px solid #d9534f", // Borde del botón (puedes cambiarlo)
          borderRadius: "4px", // Borde redondeado del botón (puedes cambiarlo)
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
