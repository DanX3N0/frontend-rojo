import React, { useState } from 'react';
import useStyles from './formDireEnv.style';

const FormDirect = () => {
  const classes = useStyles();

  const [envio, setEnvio] = useState({
    pais: '',
    ciudad: '',
    provincia: '',
    direccionUno: '',
    direccionDos: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnvio((prevEnvio) => ({
      ...prevEnvio,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(envio);
      // Aquí puedes realizar alguna acción con los datos de envío, como guardarlos en una base de datos.
    } else {
      console.log("Errores de validación:", validationErrors);
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!envio.pais) {
      errors.pais = "El país es obligatorio.";
    }
    if (!envio.ciudad) {
      errors.ciudad = "La ciudad es obligatoria.";
    }
    if (!envio.provincia) {
      errors.provincia = "La provincia es obligatoria.";
    }
    if (!envio.codigoP) {
      errors.codigoP = "La dirección 1 es obligatoria.";
    }

    return errors;
  };

  const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState([]);

  const handleEtiquetaSeleccionada = (etiqueta) => {
    if (etiquetasSeleccionadas.includes(etiqueta)) {
      setEtiquetasSeleccionadas(etiquetasSeleccionadas.filter((e) => e !== etiqueta));
    } else {
      setEtiquetasSeleccionadas([...etiquetasSeleccionadas, etiqueta]);
    }
  };

  return (
    <div className={classes.wrapper}>
    <div className={classes.titleContainer}>
      <h2>Direccion de envio</h2>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('cupones')}
          onChange={() => handleEtiquetaSeleccionada('cupones')}
        />
        Usar direccion de envio
        </label>
    </div>
    <form onSubmit={handleSubmit}  >
      <div className={classes.fila}>
      <label className={classes.label}>
        País:
        <input className={classes.input}
          type="text"
          name="pais"
          value={envio.pais}
          onChange={handleChange}
          required
          placeholder="Pais"
        />
      </label>

      <label className={classes.label}>
        Ciudad:
        <input className={classes.input}
          type="text"
          name="ciudad"
          value={envio.ciudad}
          onChange={handleChange}
          required
          placeholder="Ciudad"
        />
      </label>

      <label className={classes.label}>
        Provincia:
        <input className={classes.input}
          type="text"
          name="provincia"
          value={envio.provincia}
          onChange={handleChange}
          required
          placeholder="Provincia"
        />
      </label>
      </div>

      <label className={classes.label}>
        direccion 1:
        <input className={classes.input}
          type="text"
          name="codigoP"
          value={envio.codigoP}
          onChange={handleChange}
          required
          placeholder="Direccion"
        />
      </label>

      <label className={classes.label}>
        Dirección 2 opcional:
        <input className={classes.input}
          type="text"
          name="direccion"
          value={envio.direccion}
          onChange={handleChange}
          required
          placeholder="Direccion"
        />
      </label>

        </form>
    </div>
  );
};

export default FormDirect;
