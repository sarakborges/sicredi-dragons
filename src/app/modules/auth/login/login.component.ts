import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;

      const username = this.form.controls.username.value;
      const password = this.form.controls.password.value;

      this.userService.getUser(username, password).subscribe({
        next: user => {
          if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));

            this.router.navigate(['/', 'main']);
          } else {
            Swal.fire({
              title: 'Usuário incorreto!',
              html:
                'Lembre-se que o usuário correto é <b>user</b>, e a senha é <b>qwerty123</b>.',
              type: 'error'
            });
          }

          this.isLoading = false;
        },

        error: err => {
          console.log(err);
        }
      });
    }
  }
}
