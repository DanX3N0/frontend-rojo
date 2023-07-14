import useStyles from './formClient.styles';
import React, { useState } from 'react';

const FormClient = () => {

  const classes = useStyles();

  const [cliente, setCliente] = useState({
    id: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del cliente, como guardarlos en una base de datos.
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Si no hay errores de validación, proceder con el envío del formulario
      console.log(cliente);
      // Aquí puedes realizar alguna acción con los datos del cliente, como guardarlos en una base de datos.
    } else {
      // Si hay errores de validación, mostrar los errores en la consola o realizar alguna acción adecuada
      console.log("Errores de validación:", validationErrors);
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    // Realizar la validación del formulario
    let errors = {};

    // Validar los campos obligatorios
    if (!cliente.id) {
      errors.id = "El ID es obligatorio.";
    }
    if (!cliente.nombre) {
      errors.nombre = "El nombre es obligatorio.";
    }
    if (!cliente.apellido) {
      errors.apellido = "El apellido es obligatorio.";
    }
    if (!cliente.email) {
      errors.email = "El correo electrónico es obligatorio.";
    }
    if (!cliente.telefono) {
      errors.telefono = "El número de teléfono es obligatorio.";
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (cliente.email && !emailRegex.test(cliente.email)) {
      errors.email = "El correo electrónico no es válido.";
    }
    return errors;
  };
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Informacion del cliente</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
      <label className={classes.label}>
        ID:
        <input className={classes.input}
          type="text"
          name="id"
          value={cliente.id}
          onChange={handleChange}
          required
          placeholder="ID"
        />
      </label >
      <label className={classes.label}>
        Nombre:
        <input className={classes.input}
          type="text"
          name="nombre"
          value={cliente.nombre}
          onChange={handleChange}
          required
          placeholder="Nombre"
        />
      </label>
 
      <label className={classes.label}>
        Paterno:
        <input className={classes.input}
          type="text"
          name="apellido"
          value={cliente.apellido}
          onChange={handleChange}
          required
          placeholder="Apellido"
        />
        
      </label>
      <label className={classes.label}>
        Materno:
        <input className={classes.input}
          type="text"
          name="apellido"
          value={cliente.apellido}
          onChange={handleChange}
          required
          placeholder="Apellido"
        />
        
      </label>
      <label className={classes.label}>
        Correo electrónico:
        <input className={classes.input}
          type="email"
          name="email"
          value={cliente.email}
          onChange={handleChange}
          required
          placeholder="email@gmail.com"
        />
      </label>

      <label className={classes.label}>
        Número de teléfono:
        <input className={classes.input}
          type="text"
          name="telefono"
          value={cliente.telefono}
          onChange={handleChange}
          required
          placeholder="+1 (555) 000-0000"
        />
      </label>  

      </form>
    </div>
  );
};


export default FormClient;
