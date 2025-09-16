import ContenidoMusica from "../components/ContenidoMusica.jsx";
import "../style/Musica.css";
import "../style/Home.css";

// Componente SVG para los pétalos de cerezo
const CherryPetals = () => {
  return (
    <svg
      className="cherry-petals"
      width="100%"
      height="100%"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10,
        pointerEvents: "none",
      }}
      viewBox="0 0 1920 1080"
    >
      {/* Pétalo 1 */}
      <g className="petal petal-1">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFB7C5" opacity="0.8" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="200,0; 220,800"
          dur="8s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; 360 20 8"
          dur="4s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 2 */}
      <g className="petal petal-2">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFC0CB" opacity="0.7" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="600,-20; 580,850"
          dur="12s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; -270 20 8"
          dur="6s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 3 */}
      <g className="petal petal-3">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFCCCB" opacity="0.9" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="1000,0; 1050,900"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; 180 20 8"
          dur="3s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 4 */}
      <g className="petal petal-4">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#F8BBD9" opacity="0.6" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="1400,-10; 1350,820"
          dur="15s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; 450 20 8"
          dur="7s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 5 */}
      <g className="petal petal-5">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFB6C1" opacity="0.8" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="800,-30; 750,780"
          dur="11s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; -180 20 8"
          dur="5s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 6 */}
      <g className="petal petal-6">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FADADD" opacity="0.7" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="400,-15; 420,880"
          dur="13s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; 300 20 8"
          dur="6s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 7 */}
      <g className="petal petal-7">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFE4E1" opacity="0.6" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="100,-25; 150,900"
          dur="14s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; -360 20 8"
          dur="8s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 8 */}
      <g className="petal petal-8">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFB7C5" opacity="0.8" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="1200,-40; 1180,850"
          dur="9s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; 270 20 8"
          dur="4s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 9 */}
      <g className="petal petal-9">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFC0CB" opacity="0.7" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="1600,-20; 1550,920"
          dur="16s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; -450 20 8"
          dur="9s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 10 */}
      <g className="petal petal-10">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFCCCB" opacity="0.5" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="300,-35; 280,800"
          dur="12s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; 180 20 8"
          dur="5s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 11 */}
      <g className="petal petal-11">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#F8BBD9" opacity="0.9" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="900,-10; 950,870"
          dur="11s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; 360 20 8"
          dur="6s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 12 */}
      <g className="petal petal-12">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFB6C1" opacity="0.6" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="700,-50; 720,950"
          dur="18s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; -270 20 8"
          dur="7s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 13 */}
      <g className="petal petal-13">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FADADD" opacity="0.8" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="1300,-30; 1320,800"
          dur="10s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; 450 20 8"
          dur="8s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 14 */}
      <g className="petal petal-14">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFE4E1" opacity="0.7" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="500,-45; 480,890"
          dur="15s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; -180 20 8"
          dur="4s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>

      {/* Pétalo 15 */}
      <g className="petal petal-15">
        <path d="M15 8 Q20 2 25 8 Q20 14 15 8" fill="#FFB7C5" opacity="0.5" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="1500,-15; 1480,820"
          dur="13s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 8; 300 20 8"
          dur="5s"
          repeatCount="indefinite"
          additive="sum"
        />
      </g>
    </svg>
  );
};

export default function Musica() {
  return (
    <>
      <div className="container_home">
        <img
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758036516/descarga_1_wbv3ep.jpg"
          className="video-background"
          alt=""
        />

        <img
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758036516/descarga_1_wbv3ep.jpg"
          className="video-main"
          alt=""
        />
        <CherryPetals />
        <div className="contenido_text">
          <ContenidoMusica />
        </div>
      </div>
    </>
  );
}
