import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { passwordMatchValidator } from './../../utils/utils'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      // Aquí implementa la lógica para registrar el usuario
    }
  }
}
