import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';
import { authActions } from '@app/auth/store/actions';
import { PersistanceService } from '@app/shared/services/persistance.service';
import { CurrentUserInterface } from '@app/shared/types/current-user.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

export const registerEffect = createEffect(
  (action$ = inject(Actions), authService = inject(AuthService), persistanceService = inject(PersistanceService)) => {
    return action$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            persistanceService.set('accessToken', currentUser.token);
            return authActions.registerSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(authActions.registerFailure({ errors: errorResponse.error?.errors }));
          })
        );
      })
    );
  },

  { functional: true }
);


export const redirectAfterRegister = createEffect(
    ( action$ = inject(Actions), router = inject(Router) ) => {
        return action$.pipe(
            ofType(authActions.registerSuccess),
            tap(() => {
                // router.navigate(['/']);
            })
        )
    },
    { functional: true, dispatch: false }
)