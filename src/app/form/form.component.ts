import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  
  //Cambiar vista de password a text (Falta)
  change(){
    var x = document.getElementById("input");
    
  }

  //Pattern
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passPattern = "^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$" 
      // {6,100}           - Assert password is between 6 and 100 characters
      // (?=.*[0-9])       - Assert a string has at least one number
  
  
  //FormControl Center
  constructor(private fb: FormBuilder) { }
  profile = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    apellido: ['', [Validators.required, Validators.minLength(5)]],
    email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
    password: this.fb.group({
      contra: ['',[Validators.required, Validators.pattern(this.passPattern)]],
      confirmacion: ['',Validators.required]
    }, {validator: this.matchingPasswords('contra', 'confirmacion')}),
    gender: ['', Validators.required],
    calendar: ['', Validators.required]
  })
  //Confirmacion de Password
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
  
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

}

//Bibliografia
//https://angular.io/guide/reactive-forms#step-1-registering-the-reactive-forms-module
//https://stackoverflow.com/questions/35474991/angular-2-form-validating-for-repeat-password
//https://www.concretepage.com/angular-2/angular-2-4-pattern-validation-example
//https://coryrylan.com/blog/angular-form-builder-and-validation-management

