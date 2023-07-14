import React, { useState } from 'react';
import useStyles from './formFact.style';

const FormFact = () => {
  const classes = useStyles();

  const [factura, setFactura] = useState({
    pais: '',
    ciudad: '',
    provincia: '',
    codigoP: '',
    direccion: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFactura((prevFactura) => ({
      ...prevFactura,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(factura);
      // Aquí puedes realizar alguna acción con los datos de la factura, como guardarlos en una base de datos.
    } else {
      console.log("Errores de validación:", validationErrors);
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!factura.pais) {
      errors.pais = "El país es obligatorio.";
    }
    if (!factura.ciudad) {
      errors.ciudad = "La ciudad es obligatoria.";
    }
    if (!factura.provincia) {
      errors.provincia = "La provincia es obligatoria.";
    }
    if (!factura.codigoP) {
      errors.codigoP = "El código postal es obligatorio.";
    }
    if (!factura.direccion) {
      errors.direccion = "La dirección es obligatoria.";
    }

    return errors;
  };

  return (
    <div className={classes.wrapper}>
      <h2>Direccion de facturacion</h2>
    <form onSubmit={handleSubmit} className={classes.form} >
      <label className={classes.label}>
        País:
        <input className={classes.input}
          type="text"
          name="pais"
          value={factura.pais}
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
          value={factura.ciudad}
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
          value={factura.provincia}
          onChange={handleChange}
          required
          placeholder="Provincia"
        />
      </label>

      <label className={classes.label}>
        Código Postal:
        <input className={classes.input}
          type="text"
          name="codigoP"
          value={factura.codigoP}
          onChange={handleChange}
          required
          placeholder="Codigo postal"
        />
      </label>

      <label className={classes.label}>
        Dirección:
        <input className={classes.input}
          type="text"
          name="direccion"
          value={factura.direccion}
          onChange={handleChange}
          required
          placeholder="Direccion"
        />
      </label>

        </form>
    </div>
  );
};

export default FormFact;
