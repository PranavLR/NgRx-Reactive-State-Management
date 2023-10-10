import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { AuthResponseInterface } from '@app/auth/types/auth-response.interface';
import { RegisterRequestInterface } from '@app/auth/types/register-request.interface';
import { CurrentUserInterface } from '@app/shared/types/current-user.interface';
import { environment } from 'environments/environment.development';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  register(payload: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';

    return this.http.post<AuthResponseInterface>(url, payload).pipe(map((data) => data.user));
  }
  
}
