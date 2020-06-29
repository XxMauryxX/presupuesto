import React, { Fragment, useState } from "react";
import Mensaje from "../Mensaje/Mensaje";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setcrearGasto, restante }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantida] = useState(0);
  const [error, setError] = useState(false);
  const [errorRestante, seterrorRestante] = useState(false);

  const agregarNombre = (e) => {
    return setNombre(e.target.value);
  };
  const agregarCantidad = (e) => {
    return setCantida(parseInt(e.target.value));
  };

  const ingresarDatos = (e) => {
    e.preventDefault();

    if (restante < 0) {
      seterrorRestante(true);
      return;
    }

    if (cantidad <= 0 || isNaN(cantidad) || nombre.trim() === "") {
      // Validar:
      setError(true);
      return;
    }

    setError(false);

    // Construir el gasto:
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };

    // Pasar el gasto al componente principal:
    setGasto(gasto);
    setcrearGasto(true);

    // Resetear el Form:
    setNombre("");
    setCantida(0);
  };

  return (
    <Fragment>
      <form onSubmit={ingresarDatos}>
        <h2> Agrega tus gastos aquí </h2>
        {errorRestante ? (
          <Mensaje mensajeError="Oye bro!! Creo que ya te pasaste" />
        ) : null}

        {error ? (
          <Mensaje mensajeError="Ambos campos son obligatorios o el presupuesto esta incorrecto" />
        ) : null}
        <div className="campo">
          <label>Nombre gasto:</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            onChange={agregarNombre}
            value={nombre}
          />
        </div>

        <div className="campo">
          <label>Cantidad gasto:</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="Ej. 300"
            onChange={agregarCantidad}
            value={cantidad}
          />
        </div>

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar gasto"
        />
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setcrearGasto: PropTypes.func.isRequired,
  restante: PropTypes.number.isRequired,
};

export default Formulario;
