import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/models/interfaces';
import { PatientServiceService } from '../patient-service.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  @Input() patients: Patient[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  get occurences() {
    const elementMap = this.patients.map(patient => `${patient.name}_${patient.date_of_birth}`);
    const occurences: any = {};
    elementMap.forEach((element) => {
      occurences[element] = occurences[element] ? (occurences[element] + 1) : 1; 
    });

    return occurences;
  }
}
