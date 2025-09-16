import { useEffect } from "react";
import Calendario from "./Calendario.jsx";
import Hora from "./Hora.jsx";
import "../style/ContenidoFechaHora.css";
import { useNavigate } from "react-router-dom";

export default function ContenidoFechaHora() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/botones"); // 👈 aquí pones la ruta a la que quieres ir
    }, 7000); // 5 segundos

    return () => clearTimeout(timer); // limpiar el timer al desmontar
  }, [navigate]);

  return (
    <>
      <div className="container_fecha_hora">
        <div className="calendario">
          <div className="img_text">
            <img
              src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758035584/image_26_sfhlhg.svg"
              alt=""
            />
            <div className="text_img">
              <h2>Reserva este día</h2>
            </div>
          </div>
          <Calendario />
        </div>
        <div className="Hora mb-5">
          <div className="img_text">
            <img
              src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758035584/image_26_sfhlhg.svg"
              alt=""
            />
            <div className="text_img">
              <h2>¡Tan solo faltan!</h2>
            </div>
          </div>
          <Hora />
        </div>
      </div>
    </>
  );
}
