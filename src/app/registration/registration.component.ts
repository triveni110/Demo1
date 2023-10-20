

import { Component } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

 

 

@Component({

  selector: 'app-registration',

  templateUrl: './registration.component.html',

  styleUrls: ['./registration.component.css']

})

export class RegistrationComponent {

  title = 'Angular Reactive Form Validation';

  angForm!: FormGroup;

  constructor(private fb: FormBuilder) {

   this.createForm();

 }

  createForm() {

   this.angForm = this.fb.group({

      name: ['', Validators.required ],

      address: ['', Validators.required ]

   });

 }

 

 

}

 
