const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let patientSchema = new Schema(
  {
    Surname: {
      type: String,
      required: true,
      match: /^[A-Za-z]+$/,
    minlength: 1,
    maxlength: 16
    },
    Givenname: {
      type: String,
      required: true,
      match: /^[A-Za-z]+$/,
    minlength: 1,
    maxlength: 16
    },
    Date: {
      type: Date,
      required: true
    },
    Residence: {
      type: String,
    },
    Occupation: {
      type: String,
      required: true
    },
    Nationality: {
      type: String,
    },
    gender: {
      type: Boolean,
      required: true
    },
    category: {
      type: String,
    },
  },
  {
    collection: "patients",
  }
);
module.exports = mongoose.model("Patient", patientSchema);
