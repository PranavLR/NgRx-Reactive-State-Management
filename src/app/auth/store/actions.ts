import { RegisterRequestInterface } from "@app/auth/types/register-request.interface";
import { BackendErrorsInterface } from "@app/shared/types/backend-errors.interface";
import { CurrentUserInterface } from "@app/shared/types/current-user.interface";
import { createActionGroup, props } from "@ngrx/store";


export const authActions = createActionGroup({
    source: 'auth',
    events: {
        'Register': props<{ request: RegisterRequestInterface }>(),
        'Register Success': props<{ currentUser: CurrentUserInterface }>(),
        'Register Failure': props<{ errors: BackendErrorsInterface }>(),
    },
});






// export const register = createAction(
//     '[Auth] Register', 
//     props<{ request: RegisterRequestInterface }>()
// )

// export const registerSuccess = createAction(
//     '[Auth] Register Success', 
//     props<{ request: RegisterRequestInterface }>()
// )

// export const registerFailure = createAction(
//     '[Auth] Register Failure', 
//     props<{ request: RegisterRequestInterface }>()
// )