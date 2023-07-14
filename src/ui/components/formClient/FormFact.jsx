import React, { useState } from 'react';
import useStyles from './formFact.style';

const FormFact = () => {
  const classes = useStyles();

  const [invoice, setInvoice] = useState({
    country: '',
    city: '',
    province: '',
    postalCode: '',
    address: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log(invoice);
      
    } else {
      console.log("Validation Errors:", validationErrors);
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!invoice.country) {
      errors.country = "The country is required.";
    }
    if (!invoice.city) {
      errors.city = "The city is required.";
    }
    if (!invoice.province) {
      errors.province = "The province is required.";
    }
    if (!invoice.postalCode) {
      errors.postalCode = "The postal code is required.";
    }
    if (!invoice.address) {
      errors.address = "The address is required.";
    }

    return errors;
  };

  return (
    <div className={classes.wrapper}>
      <h2>Billing Address</h2>
    <form onSubmit={handleSubmit} >
    <div className={classes.form}>
      <label className={classes.label}>
        Country:
        <input className={classes.input}
          type="text"
          name="country"
          value={invoice.country}
          onChange={handleChange}
          required
          placeholder="Country"
        />
      </label>

      <label className={classes.label}>
        City:
        <input className={classes.input}
          type="text"
          name="city"
          value={invoice.city}
          onChange={handleChange}
          required
          placeholder="City"
        />
      </label>

      <label className={classes.label}>
        Province:
        <input className={classes.input}
          type="text"
          name="province"
          value={invoice.province}
          onChange={handleChange}
          required
          placeholder="Province"
        />
      </label>

      <label className={classes.label}>
        Postal Code:
        <input className={classes.input}
          type="text"
          name="postalCode"
          value={invoice.postalCode}
          onChange={handleChange}
          required
          placeholder="Postal code"
        />
      </label>
      </div>
      <label className={classes.label}>
        Address:
        <input className={classes.input}
          type="text"
          name="address"
          value={invoice.address}
          onChange={handleChange}
          required
          placeholder="Address"
        />
      </label>

        </form>
    </div>
  );
};

export default FormFact;
