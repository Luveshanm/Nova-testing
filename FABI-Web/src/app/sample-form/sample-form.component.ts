import {FormControl, FormGroup} from '@angular/forms';
import { APIconnectionService } from '../apiconnection.service' ;
import { ClientFormData } from '../apiconnection.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SampleFormComponent implements OnInit {

  sampleForm = new FormGroup({
    sample_form_name: new FormControl(),
    sample_form_company: new FormControl(),
    sample_form_address: new FormControl(),
    sample_form_contact: new FormControl(),
    sample_form_email: new FormControl(),
    sample_form_tree_species: new FormControl(),
    sample_form_number_samples: new FormControl(),
    sample_form_location1: new FormControl(),
    sample_form_location2: new FormControl(),
    sample_form_compartment: new FormControl(),
    sample_form_gps: new FormControl(),
    sample_form_date_collection: new FormControl(),
    sample_form_date_sent: new FormControl(),
    sample_type_soil: new FormControl(),
    sample_type_stems: new FormControl(),
    sample_type_roots: new FormControl(),
    sample_type_twigs: new FormControl(),
    sample_type_leaves: new FormControl(),
    sample_type_seedlings: new FormControl(),
    sample_type_media: new FormControl(),
    sample_type_water: new FormControl(),
    symptom_wilt: new FormControl(),
    symptom_stunting: new FormControl(),
    symptom_leafspot: new FormControl(),
    symptom_rootrot: new FormControl(),
    symptom_dieback: new FormControl(),
    symptom_cankers: new FormControl(),
    symptom_death: new FormControl(),
    symptom_wood: new FormControl(),
    symptom_other: new FormControl(),
    distribution_localized: new FormControl(),
    distributed_scattered: new FormControl(),
    distributed_general: new FormControl(),
    conditions_affected: new FormControl(),
    conditions_problem_noticed: new FormControl(),
    conditions_date_planted: new FormControl(),
    conditions_weather_disturbances: new FormControl(),
    conditions_weather_prior: new FormControl(),
    conditions_others: new FormControl(),
    conditions_additional: new FormControl(),
    landowner: new FormControl(),
    landowner_signature: new FormControl()

  });

  api: APIconnectionService;

  constructor() { }

  ngOnInit() {
  }

  sendForm() {
    const formDetails: ClientFormData = {
      name : this.sampleForm.controls.sample_form_name.value,
      company : this.sampleForm.controls.sample_form_company.value,
      address : this.sampleForm.controls.sample_form_address.value,
      contact : this.sampleForm.controls.sample_form_contact.value,
      email : this.sampleForm.controls.sample_form_email.value,
      tree_species : this.sampleForm.controls.sample_form_tree_species.value,
      number_samples : this.sampleForm.controls.sample_form_number_samples.value,
      location1 : this.sampleForm.controls.sample_form_location1.value,
      location2 : this.sampleForm.controls.sample_form_location2.value,
      compartment : this.sampleForm.controls.sample_form_compartment.value,
      gps : this.sampleForm.controls.sample_form_gps.value,
      date_collection : this.sampleForm.controls.sample_form_date_collection.value,
      date_sent : this.sampleForm.controls.sample_form_date_sent.value,
      type_soil : this.sampleForm.controls.sample_type_soil.value,
      type_stems : this.sampleForm.controls.sample_type_stems.value,
      type_roots : this.sampleForm.controls.sample_type_roots.value,
      type_twigs : this.sampleForm.controls.sample_type_twigs.value,
      type_leaves : this.sampleForm.controls.sample_type_leaves.value,
      type_seedlings : this.sampleForm.controls.sample_type_seedlings.value,
      type_media : this.sampleForm.controls.sample_type_media.value,
      type_water : this.sampleForm.controls.sample_type_water.value,
      symptom_wilt : this.sampleForm.controls.symptom_wilt.value,
      symptom_stunting : this.sampleForm.controls.symptom_stunting.value,
      symptom_leafspot : this.sampleForm.controls.symptom_leafspot.value,
      symptom_rootrot : this.sampleForm.controls.symptom_rootrot.value,
      symptom_dieback : this.sampleForm.controls.symptom_dieback.value,
      symptom_cankers : this.sampleForm.controls.symptom_cankers.value,
      symptom_death : this.sampleForm.controls.symptom_death.value,
      symptom_wood : this.sampleForm.controls.symptom_wood.value,
      symptom_other : this.sampleForm.controls.symptom_other.value,
      distribution_localized : this.sampleForm.controls.distribution_localized.value,
      distribution_scattered : this.sampleForm.controls.distributed_scattered.value,
      distribution_general : this.sampleForm.controls.distributed_general.value,
      conditions_affected : this.sampleForm.controls.conditions_affected.value,
      conditions_problem_noticed : this.sampleForm.controls.conditions_problem_noticed.value,
      conditions_date_planted : this.sampleForm.controls.conditions_date_planted.value,
      conditions_weather_disturbance : this.sampleForm.controls.conditions_weather_disturbances.value,
      conditions_weather_prior : this.sampleForm.controls.conditions_weather_prior.value,
      conditions_other : this.sampleForm.controls.conditions_others.value,
      conditions_additional : this.sampleForm.controls.conditions_additional.value,
      landowner : this.sampleForm.controls.landowner.value,
      landowner_signature : this.sampleForm.controls.landowner_signature.value
    };

    this.api.submitForm(formDetails);
  }

}
