import { auth } from '@@store/middlewares';

export const login = auth.actions.loginStart;

export const signUp = auth.actions.signUpStart;
