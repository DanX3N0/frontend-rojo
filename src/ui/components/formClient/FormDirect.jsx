import React, { useState } from 'react';
import useStyles from './formDireEnv.style';

const FormDirect = () => {
  const classes = useStyles();

  const [envio, setEnvio] = useState({
    country: '',
    city: '',
    province: '',
    addressOne: '',
    addressTwo: ''
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
      // You can perform some action with the shipping data here, like saving it to a database.
    } else {
      console.log("Validation Errors:", validationErrors);
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (!envio.country) {
      errors.country = "The country is required.";
    }
    if (!envio.city) {
      errors.city = "The city is required.";
    }
    if (!envio.province) {
      errors.province = "The province is required.";
    }
    if (!envio.addressOne) {
      errors.addressOne = "Address 1 is required.";
    }

    return errors;
  };

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.titleContainer}>
        <h2>Shipping Address</h2>
        <label className={classes.checkboxLabel}>
          <input 
            type="checkbox"
            checked={selectedTags.includes('coupons')}
            onChange={() => handleTagSelection('coupons')}
          />
          Use billing address
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={classes.row}>
          <label className={classes.label}>
            Country:
            <input
              className={classes.input}
              type="text"
              name="country"
              value={envio.country}
              onChange={handleChange}
              required
              placeholder="Country"
            />
          </label>

          <label className={classes.label}>
            City:
            <input
              className={classes.input}
              type="text"
              name="city"
              value={envio.city}
              onChange={handleChange}
              required
              placeholder="City"
            />
          </label>

          <label className={classes.label}>
            Province:
            <input
              className={classes.input}
              type="text"
              name="province"
              value={envio.province}
              onChange={handleChange}
              required
              placeholder="Province"
            />
          </label>
        </div>

        <label className={classes.label}>
          Address 1:
          <input
            className={classes.input}
            type="text"
            name="addressOne"
            value={envio.addressOne}
            onChange={handleChange}
            required
            placeholder="Address"
          />
        </label>

        <label className={classes.label}>
          Address 2 (optional):
          <input
            className={classes.input}
            type="text"
            name="addressTwo"
            value={envio.addressTwo}
            onChange={handleChange}
            required
            placeholder="Address"
          />
        </label>

      </form>
    </div>
  );
};

export default FormDirect;
