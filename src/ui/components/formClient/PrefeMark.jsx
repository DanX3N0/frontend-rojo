
import useStyles from './formPrefeMar.style';
import React, { useState } from 'react';

function PreferenceMark() {
  const classes = useStyles();

  const [etiquetasSeleccionadas, setEtiquetasSeleccionadas] = useState([]);
  const [errors, setErrors] = useState({});

  const handleEtiquetaSeleccionada = (etiqueta) => {
    if (etiquetasSeleccionadas.includes(etiqueta)) {
      setEtiquetasSeleccionadas(etiquetasSeleccionadas.filter((e) => e !== etiqueta));
    } else {
      setEtiquetasSeleccionadas([...etiquetasSeleccionadas, etiqueta]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Etiquetas seleccionadas:", etiquetasSeleccionadas);
      // Aquí puedes realizar alguna acción con las etiquetas seleccionadas, como guardarlas en una base de datos.
    } else {
      console.log("Errores de validación:", validationErrors);
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};

    // Realiza la validación de acuerdo a tus requisitos
    if (etiquetasSeleccionadas.length === 0) {
      errors.etiquetas = "Debes seleccionar al menos una etiqueta.";
    }

    return errors;
  };

  return (
    <div className={classes.wrapper}>
        <h2>Preferencias de Marketing</h2>
      <div className={classes.containerSelc}>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('folletos')}
          onChange={() => handleEtiquetaSeleccionada('folletos')}
        />
        Folletos
      </label>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('email')}
          onChange={() => handleEtiquetaSeleccionada('email')}
        />
        Email
      </label >
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('descuentos')}
          onChange={() => handleEtiquetaSeleccionada('descuentos')}
        />
        Descuentos
      </label>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('publicidad')}
          onChange={() => handleEtiquetaSeleccionada('publicidad')}
        />
        Publicidad
      </label>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('promociones')}
          onChange={() => handleEtiquetaSeleccionada('promociones')}
        />
        Promociones
      </label>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={etiquetasSeleccionadas.includes('cupones')}
          onChange={() => handleEtiquetaSeleccionada('cupones')}
        />
        Cupones
      </label>

      </div>  
      <div className={classes.buttonContainer}>
      <button className={`${classes.button} ${classes.saveButton}`} type="submit">
        Guardar cambios
      </button>
      <button className={`${classes.button} ${classes.cancelButton}`} type="button">
        Cancelar
      </button>
      </div>
    </div>
  );
}

export default PreferenceMark;
