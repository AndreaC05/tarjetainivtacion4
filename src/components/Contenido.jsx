import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // importamos para navegar
import "../style/Contenido.css";

export default function Contenido() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [secondDisplayed, setSecondDisplayed] = useState("");
  const navigate = useNavigate(); //hook para redirigir

  const firstText = "La noche se ilumina con colores y risas...";
  const secondText = "Te invito a celebrar mi cumpleaños";

  // efecto escritura del primer texto
  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < firstText.length) {
        setDisplayedText(firstText.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, 80);
      } else {
        // después de escribir, esperar 2s y hacer fade out
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setShowSecond(true);
          }, 1000); // espera a que termine el fadeOut
        }, 2000);
      }
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, [firstText]);

  // efecto escritura del segundo texto
  useEffect(() => {
    if (showSecond) {
      let j = 0;
      const typeWriter2 = () => {
        if (j < secondText.length) {
          setSecondDisplayed(secondText.substring(0, j + 1));
          j++;
          setTimeout(typeWriter2, 80);
        } else {
          // quitar cursor después de 1s de terminar
          setTimeout(() => setShowCursor(false), 1000);

          // después de 5s de que todo terminó, redirigir
          setTimeout(() => {
            navigate("/musica"); //cambia "/" por la ruta de tu otra página
          }, 5000);
        }
      };
      typeWriter2();
    }
  }, [showSecond, secondText, navigate]);

  return (
    <div className="container_texto_invitacion">
      <div className="nombre">
        <img
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758035584/image_26_sfhlhg.svg"
          alt=""
        />
        <div className="nombre-tit">
          <h1>Mariana</h1>
        </div>
      </div>
      <div className="subtitulo">
        {!showSecond ? (
          <p
            className={`cursor ${showCursor ? "blinking-cursor" : ""} ${
              fadeOut ? "fade-out" : ""
            }`}
          >
            {displayedText}
          </p>
        ) : (
          <p
            className={`cursor ${showCursor ? "blinking-cursor" : ""} fade-in`}
          >
            {secondDisplayed}
          </p>
        )}
      </div>
    </div>
  );
}
