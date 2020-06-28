import { auth, fetch } from '@@store/middlewares';
import { routes } from '@@utils';

export const login = auth.actions.loginStart;
export const loginFacebook = auth.actions.loginFacebookStart;
export const loginGoogle = auth.actions.loginGoogleStart;

export const logout = auth.actions.logoutStart;

export const signUp = auth.actions.signUpStart;

export const fetchProfile = id =>
  fetch.actions.fetch({ name: `user/${id}/data`, url: routes.profile(id) });

export const fetchClientNames = () =>
  fetch.actions.fetch({
    name: 'clientNames',
    url: routes.clientNames,
  });

export const editUser = (id, params) =>
  fetch.actions.fetch(
    {
      name: `user/${id}/data`,
      url: routes.editUser(id),
    },
    { method: 'PUT', data: params }
  );

export const becomeProvider = id => editUser(id, { isProvider: true });
