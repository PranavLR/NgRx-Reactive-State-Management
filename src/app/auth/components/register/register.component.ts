import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { authActions } from '@app/auth/store/actions';
import { authFeature } from '@app/auth/store/reducers';
import { RegisterRequestInterface } from '@app/auth/types/register-request.interface';
import { BackendErrorMessageComponent } from '@app/shared/components/backend-error-message/backend-error-message.component';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule, RouterLink, BackendErrorMessageComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  // @ViewChild(FormGroupDirective) private formDir!: FormGroupDirective;
  fb = inject(FormBuilder);
  store = inject(Store);
  
  registerForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  
  data$ = combineLatest({
    isSubmitting: this.store.select(authFeature.selectIsSubmitting),
    isLoading: this.store.select(authFeature.selectIsLoading),
    backendErrors: this.store.select(authFeature.selectValidationErrros),
  })
  
  onSubmit() {

    console.log('this.from.value: ', this.registerForm.getRawValue());

    const request: RegisterRequestInterface = {
      user: this.registerForm.getRawValue()
    }

    this.store.dispatch(authActions.register({request}));

    // this.formDir.resetForm(this.registerForm);
    this.registerForm.reset();

  }

  

}

