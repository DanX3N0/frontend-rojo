import useStyles from './formClient.styles';
import React, { useState } from 'react';

const FormClient = () => {
  const classes = useStyles();

  const [cliente, setCliente] = useState({
    id: '',
    name: '',
    lastName: '',
    email: '',
    phone: ''
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
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(cliente);
    } else {
      console.log("Validation errors:", validationErrors);
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};
  
    const fieldNames = {
      id: "ID is required.",
      name: "Name is required.",
      lastName: "Last name is required.",
      email: "Email is required.",
      phone: "Phone number is required."
    };

    Object.keys(fieldNames).forEach(key => {
      if (!cliente[key]) {
        errors[key] = fieldNames[key];
      }
    });
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (cliente.email && !emailRegex.test(cliente.email)) {
      errors.email = "Email is not valid.";
    }
    return errors;
  };

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Client Information</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label className={classes.label}>
          ID:
          <input
            className={classes.input}
            type="text"
            name="id"
            value={cliente.id}
            onChange={handleChange}
            required
            placeholder="ID"
          />
        </label>
        <label className={classes.label}>
          Name:
          <input
            className={classes.input}
            type="text"
            name="name"
            value={cliente.name}
            onChange={handleChange}
            required
            placeholder="Name"
          />
        </label>
        <label className={classes.label}>
          Father:
          <input
            className={classes.input}
            type="text"
            name="lastName"
            value={cliente.lastName}
            onChange={handleChange}
            required
            placeholder="Last Name"
          />
        </label>
        <label className={classes.label}>
          Mother:
          <input
            className={classes.input}
            type="text"
            name="lastName"
            value={cliente.lastName}
            onChange={handleChange}
            required
            placeholder="Last Name"
          />
        </label>
        <label className={classes.label}>
          Email:
          <input
            className={classes.input}
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
            required
            placeholder="email@gmail.com"
          />
        </label>
        <label className={classes.label}>
          Phone Number:
          <input
            className={classes.input}
            type="text"
            name="phone"
            value={cliente.phone}
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
