import { Button } from "primereact/button";
import { useAudio } from "../context/AudioProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Musica.css";

export default function ContenidoMusica() {
  const { isPlaying, hasInteracted, togglePlayPause } = useAudio();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/fechahora"); // 👈 aquí pones la ruta a la que quieres ir
    }, 7000); // 5 segundos

    return () => clearTimeout(timer); // limpiar el timer al desmontar
  }, [navigate]);

  return (
    <>
      <div className="musica_text">
        <h2>Entre pinceladas y notas, la celebración comienza.</h2>
      </div>
      <div className="container_reproductor">
        <Button
          icon={isPlaying ? "pi pi-pause" : "pi pi-play"}
          className="play-button"
          onClick={togglePlayPause}
        />
        {!hasInteracted && (
          <p
            className="interaction-hint"
            style={{
              fontSize: "0.9rem",
              opacity: 0.8,
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            {/* Aquí podrías poner un mensaje tipo: "Toca la pantalla para activar la música" */}
          </p>
        )}
      </div>
    </>
  );
}
