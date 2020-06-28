import { compose, withProps, withHandlers } from 'recompose';

import BaseProfilePicture from './ProfilePicture';

const ProfilePicture = compose(
  withProps(({ formValues }) => ({
    value: [formValues.profilePicture],
  })),
  withHandlers({
    onSelectImage: ({ formValues, setFormValues }) => uri =>
      setFormValues({ ...formValues, profilePicture: uri }),
  })
)(BaseProfilePicture);

export default ProfilePicture;
