import { authActions } from "@app/auth/store/actions";
import { AuthStateInterface } from "@app/auth/types/auth-state-interface";
import { createFeature, createReducer, on } from "@ngrx/store";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: undefined,
    isLoading: false,
    validationErrros: null
}

const reducer = createReducer(
    initialState,

    on(authActions.register, (state) => ({ 
        ...state, 
        isSubmitting: true,
        isLoading: true,
        validationErrros: null 
    })),

    on(authActions.registerSuccess, (state, action) => ({
        ...state, 
        isSubmitting: false,
        isLoading: false,
        currentUser: action.currentUser,
    })),
    
    on(authActions.registerFailure, (state, action) => ({
        ...state, 
        isSubmitting: false,
        isLoading: false,
        validationErrros: action.errors,
    })),

)
export const authFeature = createFeature({
    name: 'auth',
    reducer
});



// export const { 
//     name: authFeatureKey,
//     reducer: authReducer,
//     selectIsSubmitting,
//     selectIsLoading,
//     selectCurrentUser,
//     selectValidationErrros,
// } = authFeature;