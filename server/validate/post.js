const Validator = require('validator');
const isEmpty = require('./is-empty');

function validatePostInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.body = !isEmpty(data.body) ? data.body : "";

  if (Validator.isEmpty(data.title)) {
    errors.title = 'A Title is Required';
  }

  if (Validator.isEmpty(data.body)) {
   errors.body = 'Post Body is Required';
 }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validatePostInput;