import { auth, fetch } from '@@store/middlewares';
import { routes } from '@@utils';

export const login = auth.actions.loginStart;
export const loginFacebook = auth.actions.loginFacebookStart;
export const loginGoogle = auth.actions.loginGoogleStart;

export const logout = auth.actions.logoutStart;

export const signUp = auth.actions.signUpStart;

export const fetchProfile = id =>
  fetch.actions.fetch({ name: 'profile', url: routes.profile(id) });
