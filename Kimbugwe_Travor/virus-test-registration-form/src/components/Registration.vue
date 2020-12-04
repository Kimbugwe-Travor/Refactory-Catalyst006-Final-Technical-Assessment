<template>
  <div class="container">
    <div class="row">
      <form role="form">
       
    <center><img alt="Form Header Image" src="../assets/form-header-image.png"></center>
    <h2><center>Ministry of Health</center></h2>
    <h2><center><b>COVID 19(CORONA VIRUS)</b></center></h2>
    <h2><center>Virus-Test Registration form</center></h2>


        <div class=" col">
          <label>Surname</label>
          <input
            type="text"
            class="form-control"
            v-model="patient.Surname"
            required
          />
        </div>
        <div class=" col">
          <label>Given name</label>
          <input
            type="text"
            class="form-control"
            v-model="patient.Givenname"
            required
          />
        </div>

        <div class=" col">
          <label>Date of Birth</label>
          <input
            type="date"
            class="form-control"
            v-model="patient.Date"
            required
          />
        </div>
        <div class=" col">
          <label>Place of Residence</label>
          <input
            type="text"
            class="form-control"
            v-model="patient.Residence"
            required
          />
        </div>
        <div class=" col">
          <label>Occupation</label>
          <input
            type="text"
            class="form-control"
            v-model="patient.Occupation"
            required
          />
        </div>
        <div class=" col">
          <label>Nationality</label>
          <input
            type="text"
            class="form-control"
            v-model="patient.Nationality"
            required
          />
        </div>

        <div class="col-xs-10 col-sm-10 col-md-4 col-lg-4">
          <label>Gender</label>
          <label>
            <input type="radio" name="gender" value="male" checked /> Male<input
              type="radio"
              name="gender"
              value="female"
            />
            Female
          </label>
          </div>
          <div>
          <select name="category">
            <option value=""> --Select category</option>
            <option value="Alert" >Alert</option>
            <option value="Returnee">Returnee</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Contact">Contact</option>
          </select>
        </div>
        <div class="col-xs-10 col-sm-4 col-md-4 col-lg-4">
          <button type="submit" class="btn btn-default">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import axios from "axios"

export default {
    data() {
        return {
            patient: {
               Surname: '',
               Givenname: '',
               Date: '',
               Residence: '',
               Occupation: '',
               Nationality: ''
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/register';
                
                axios.post(apiURL, this.patient).then(() => {
                  this.$router.push('/view')
                  this.patient = {
                       Surname: '',
               Givenname: '',
               Date: '',
               Residence: '',
               Occupation: '',
               Nationality: ''
                }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
 
</script>
