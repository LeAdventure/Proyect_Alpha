import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  ngOnInit() {}
  
  /*
  profile = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl('')
  })
  */


  //Save Info of Form
  submit(){
    console.warn(this.profile.value);
  }
  
  //Cambiar vista de password a text
  change(){
    var x = document.getElementById("input");
    
  }

  //FormControl Center
  constructor(private fb: FormBuilder) { }
  profile = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['',Validators.required],
    password: this.fb.group({
      contra: ['',Validators.required],
      confirmacion: ['',Validators.required]
    }),
    gender: ['', Validators.required],
    calendar: ['', Validators.required]
  })
  
}


//https://angular.io/guide/reactive-forms#step-1-registering-the-reactive-forms-module