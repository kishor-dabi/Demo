import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  formSubmit = false

  constructor(private formBuilder: FormBuilder, private api:ApiService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  get formValue() { return this.registerForm.controls; }

  login() {
    console.log("login", this.registerForm.value);
    
    this.formSubmit = true
    if (this.registerForm.invalid) {
      return;
    }

    this.api.Login('jwt/api-token-auth', this.registerForm.value).subscribe(
      data => {
        console.log(data);
        
      },error =>{

      })

  }

}
