import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/proyectos']),
      error: () => this.error = 'Credenciales incorrectas'
    });
  
  }

}
