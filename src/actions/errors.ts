export enum ErrorActionTypes {
    RESET_ERRORS = 'RESET_ERRORS',
}

export interface IResetErrorAction {
  type: ErrorActionTypes.RESET_ERRORS
}

