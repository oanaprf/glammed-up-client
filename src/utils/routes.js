export const login = '/login';
export const user = '/user';
export const services = '/services';
export const mostPopularServices = '/services?mostPopular=true';
export const search = (name, category) =>
  `/services/search?${name ? `&name=${name}` : ''}${
    category ? `${name && category ? '&' : ''}category=${category}` : ''
  }`;
