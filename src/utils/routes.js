export const login = '/login';
export const user = '/user';

// home
export const services = '/services';
export const mostPopularServices = '/services?mostPopular=true';

// search
export const search = (name, category) =>
  `/services/search?${name ? `&name=${name}` : ''}${
    category ? `${name && category ? '&' : ''}category=${category}` : ''
  }`;

// profile
export const profile = id => `/user/${id}`;
export const userReviews = id => `/client/${id}/reviews`;
export const userServices = id => `/provider/${id}/services`;
export const addService = '/service';

// appointments
export const clientAppointments = id => `/client/${id}/appointments`;
export const providerAppointments = (id, date) =>
  `/provider/${id}/appointments?date=${date}`;
export const userServiceNames = id => `/provider/${id}/serviceNames`;
export const clientNames = 'clientNames';
export const freeSpots = (id, date, duration) =>
  `provider/${id}/free-spots?date=${date}&duration=${duration}`;
export const bookAppointment = '/appointment';
export const updateAppointment = id => `/appointment/${id}`;
