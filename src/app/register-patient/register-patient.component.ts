import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Patient } from 'src/models/interfaces';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {

  alert = {
    status: '',
    message: ''
  }

  patients: Patient[] = [];

  patientForm = this.fb.group({
    name: ['', Validators.required],
    gender_id: ['', Validators.required],
    date_of_birth: ['', Validators.required],
    general_comments: [''],
    service_id: ['', Validators.required],
  })

  constructor(private service: PatientServiceService, public fb: FormBuilder) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.service.getPatients().subscribe(patients => {
      this.patients = patients;
    });
  }

  createPatient() {
    if (this.patientForm.valid) {
      console.table(this.patientForm.value);
      this.service.createPatient(this.patientForm.value).subscribe(response => {
        console.log(response);
        this.alert = {
          status: 'success',
          message: 'Patient created successfully'
        };
        this.patientForm.reset();
        this.getPatients();
      });
    } else {
      this.alert = {
        status: 'error',
        message: 'Please ensure you fill out each input field'
      };
    }

    setTimeout(() => {
      this.alert = {
        status: '',
        message: ''
      }
    }, 3500);
  }

}
