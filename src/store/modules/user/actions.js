import { auth } from '@@store/middlewares';

export const login = auth.actions.loginStart;
export const loginFacebook = auth.actions.loginFacebookStart;
export const loginGoogle = auth.actions.loginGoogleStart;

export const signUp = auth.actions.signUpStart;
