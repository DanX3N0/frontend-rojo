import useStyles from './formPrefeMar.style';
import React, { useState } from 'react';

function PreferenceMark() {
  const classes = useStyles();

  const [selectedTags, setSelectedTags] = useState([]);
  const [errors, setErrors] = useState({});

  const handleTagSelection = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Selected tags:", selectedTags);

    } else {
      console.log("Validation Errors:", validationErrors);
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};

    if (selectedTags.length === 0) {
      errors.tags = "You must select at least one tag.";
    }

    return errors;
  };

  return (
    <div className={classes.wrapper}>
        <h2>Marketing Preferences</h2>
      <div className={classes.containerSelc}>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={selectedTags.includes('brochures')}
          onChange={() => handleTagSelection('brochures')}
        />
        Brochures
      </label>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={selectedTags.includes('email')}
          onChange={() => handleTagSelection('email')}
        />
        Email
      </label>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={selectedTags.includes('discounts')}
          onChange={() => handleTagSelection('discounts')}
        />
        Discounts
      </label>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={selectedTags.includes('advertising')}
          onChange={() => handleTagSelection('advertising')}
        />
        Advertising
      </label>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={selectedTags.includes('promotions')}
          onChange={() => handleTagSelection('promotions')}
        />
        Promotions
      </label>
      <label className={classes.checkboxLabel}>
        <input
          type="checkbox"
          checked={selectedTags.includes('coupons')}
          onChange={() => handleTagSelection('coupons')}
        />
        Coupons
      </label>

      </div>  
      <div className={classes.buttonContainer}>
      <button className={`${classes.button} ${classes.saveButton}`} type="submit">
        Save Changes
      </button>
      <button className={`${classes.button} ${classes.cancelButton}`} type="button">
        Cancel
      </button>
      </div>
    </div>
  );
}

export default PreferenceMark;
