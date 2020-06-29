import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Mensaje = ({ mensajeError }) => {
  return (
    <Fragment>
      <p className="alert alert-danger error">{mensajeError}</p>
    </Fragment>
  );
};

Mensaje.propTypes = {
  mensajeError: PropTypes.string.isRequired,
};

export default Mensaje;
