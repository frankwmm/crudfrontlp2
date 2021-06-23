import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../providers/auth/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  error: string;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    console.log('login');
  }

  ngOnDestroy() {
  }

  public login(): void {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(response => {
      if (response.data.token) {
        localStorage.setItem('accessToken', response.data.token);
        if (localStorage.getItem('accessToken')) {
          this.redirectInto();
        }
      }
    }, error => {
      this.error = error;
    });
  }

  redirectInto(): void {
    this.router.navigate(['dashboard']);
  }
}
