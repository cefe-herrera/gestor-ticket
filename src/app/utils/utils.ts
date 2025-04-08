// Validador personalizado para verificar que las contraseñas coincidan
import { AbstractControl } from '@angular/forms';


export function passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      // Si se corrige el error, se limpia el objeto de errores
      if (confirmPassword?.hasError('passwordMismatch')) {
        confirmPassword.setErrors(null);
      }
    }
    return null;
  }