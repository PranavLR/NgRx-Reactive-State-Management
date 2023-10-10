import { BackendErrorsInterface } from '@app/shared/types/backend-errors.interface';
import { CurrentUserInterface } from '@app/shared/types/current-user.interface';


export interface AuthStateInterface {
    isSubmitting: boolean,
    currentUser: CurrentUserInterface | null | undefined,
    isLoading: boolean,
    validationErrros: BackendErrorsInterface | null,
}
