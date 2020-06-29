import React, { Fragment, useState, useEffect } from "react";
import Pregunta from "./components/Pregunta/Pregunta.jsx";
import Formulario from "./components/Formulario/Formulario.jsx";
import Listado from "./components/Listado/Listado.jsx";
import ControlPresupuesto from "./components/ControlPresupuesto/ControlPresupuesto.jsx";

function App() {
  // Definir los State:
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [validar, setValidar] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setcrearGasto] = useState(false);

  // UseEffect que actualiza el restante:
  useEffect(() => {
    if (crearGasto) {
      setGastos([...gastos, gasto]);

      // Resta del presupuesto actual:
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      // Resetear el False:
      setcrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1> Gasto semanal</h1>
        </header>
        <div className="contenido-principal contenido">
          {validar ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setValidar={setValidar}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  setGasto={setGasto}
                  setcrearGasto={setcrearGasto}
                  restante={restante}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
