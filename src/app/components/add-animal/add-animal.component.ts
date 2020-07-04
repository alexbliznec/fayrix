import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data-service/data.service';
import { BehaviorSubject } from 'rxjs';

const CONTROL_INPUTS = [
  'cowId',
  'animalId',
  'eventId',
  'healthIndex',
  'endDate',
  'minValueDateTime',
  'type',
  'deletable',
  'lactationNumber',
  'daysInLactation',
  'ageInDays',
  'startDateTime',
  'reportingDateTime',
  'alertType',
  'duration',
  'originalStartDateTime',
  'endDateTime',
  'daysInPregnancy',
  'newGroupId',
  'newGroupName',
  'currentGroupId',
  'currentGroupName',
  'destinationGroup',
  'calvingEase',
  'oldLactationNumber',
  'newborns',
  'cowEntryStatus',
  'sire',
  'breedingNumber',
  'isOutOfBreedingWindow',
  'interval',
  'birthDateCalculated',
  'heatIndexPeak'
];

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {
  addAnimalForm: FormGroup;
  controls: string[];

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.controls = CONTROL_INPUTS;
    this.createForm();
  }

  createForm() {
   this.addAnimalForm = this.fb.group({
    cowId: ['', Validators.required],
    animalId: ['', Validators.required],
    eventId: ['', Validators.required],
    healthIndex: '',
    endDate: '',
    minValueDateTime: '',
    type: '',
    deletable: '',
    lactationNumber: '',
    daysInLactation: '',
    ageInDays: '',
    startDateTime: '',
    reportingDateTime: '',
    alertType: '',
    duration: '',
    originalStartDateTime: '',
    endDateTime: '',
    daysInPregnancy: '',
    newGroupId: '',
    newGroupName: '',
    currentGroupId: '',
    currentGroupName: '',
    destinationGroup: '',
    calvingEase: '',
    oldLactationNumber: '',
    newborns: '',
    cowEntryStatus: '',
    sire: '',
    breedingNumber: '',
    isOutOfBreedingWindow: '',
    interval: '',
    birthDateCalculated: '',
    heatIndexPeak: '',
    });
  }

  submitForm() {
    if (!this.addAnimalForm.valid) {
      this.addAnimalForm.markAllAsTouched();
      return;
    }
    this.dataService.addNewAnimal(this.addAnimalForm.value);
    this.addAnimalForm.reset();
    this.addAnimalForm.markAsUntouched();
    this.dataService.showAddAnimalForm$.next(false);
  }
}
