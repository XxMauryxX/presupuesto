import React, { Fragment, useState } from "react";
import Mensaje from "../Mensaje/Mensaje";
import PropTypes from "prop-types";

const Pregunta = ({ setPresupuesto, setRestante, setValidar }) => {
  // Definir State cantidad:
  const [cantidad, setCantidad] = useState(0);

  // Definir State para errores:
  const [error, setError] = useState(false);

  // Función que lee el presupuesto:
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value), 10);
  };

  // Submit para definir el presupuesto:
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // Validar:
    if (cantidad <= 0 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // Si se pasa la validación:
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setValidar(false);
  };

  return (
    <Fragment>
      <h2> Coloca tu presupuesto </h2>
      {error ? <Mensaje mensajeError="El presupuesto es incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setValidar: PropTypes.func.isRequired,
};

export default Pregunta;
