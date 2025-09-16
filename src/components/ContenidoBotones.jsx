import { Button } from "primereact/button";
import "../style/Botones.css";

export default function ContenidoBotones() {
  return (
    <>
      <div className="text_botones">
        <p>
          Que esta celebración sea solo el inicio de momentos inolvidables
          juntos.
        </p>
      </div>
      <div className="conteiner_botones">
        {/* Botón Dirección */}
        <div className="buton_direccion flex">
          <i className="pi pi-map-marker"></i>
          <a href="https://maps.app.goo.gl/8JVW2B5yPjbhDADKA" target="_blank">
            <Button label="Ver Dirección" />
          </a>
        </div>
        <div className="buton_whatsapp flex ml-5">
          <i className="pi pi-whatsapp"></i>
          <a
            href="https://wa.me/51950874416?text=Hola%20quiero%20confirmar%20mi%20asistencia%20a%20tu%20fiesta."
            target="_blank"
          >
            <Button label="Confirmar" />
          </a>
        </div>
      </div>
    </>
  );
}
